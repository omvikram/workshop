import socket
import threading
import pytest
from client import start_client

# Mock server to simulate server behavior
def mock_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(('127.0.0.1', 12345))
    server_socket.listen(1)
    conn, addr = server_socket.accept()

    while True:
        data = conn.recv(1024).decode('utf-8')
        if not data or data.lower() == 'exit':
            break
        conn.send(data.encode('utf-8'))  # Echo back the received message

    conn.close()
    server_socket.close()

# Test cases
@pytest.fixture(scope="module", autouse=True)
def start_mock_server():
    # Start the mock server in a separate thread
    server_thread = threading.Thread(target=mock_server, daemon=True)
    server_thread.start()

def test_client_communication(monkeypatch):
    # Simulate user input and capture output
    inputs = iter(["Hello, Server!", "exit"])
    outputs = []

    def mock_input(prompt):
        return next(inputs)

    def mock_print(*args):
        outputs.append(" ".join(map(str, args)))

    monkeypatch.setattr("builtins.input", mock_input)
    monkeypatch.setattr("builtins.print", mock_print)

    # Start the client
    start_client()

    # Verify the outputs
    assert "Connected to the server. Type 'exit' to disconnect." in outputs
    assert "You: Hello, Server!" in outputs
    assert "Server: Hello, Server!" in outputs
    assert "Disconnected from the server." in outputs