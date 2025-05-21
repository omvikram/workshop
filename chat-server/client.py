import socket

def start_client():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect(('127.0.0.1', 12345))  # Connect to the server
    print("Connected to the server. Type 'exit' to disconnect.")

    while True:
        message = input("You: ")  # Client's message
        client_socket.send(message.encode('utf-8'))  # Send message to the server
        if message.lower() == 'exit':
            print("Disconnected from the server.")
            break
        response = client_socket.recv(1024).decode('utf-8')  # Receive response from the server
        print(f"Server: {response}")

    client_socket.close()

if __name__ == "__main__":
    start_client()