import socket

def start_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(('127.0.0.1', 12345))  # Bind to localhost and port 12345
    server_socket.listen(1)  # Listen for one connection at a time
    print("Server is listening on port 12345...")

    conn, addr = server_socket.accept()
    print(f"Connected by {addr}")

    while True:
        data = conn.recv(1024).decode('utf-8')  # Receive data from the client
        if not data or data.lower() == 'exit':
            print("Client disconnected.")
            break
        print(f"Client: {data}")
        response = input("You: ")  # Server's response
        conn.send(response.encode('utf-8'))  # Send response to the client

    conn.close()
    server_socket.close()

if __name__ == "__main__":
    start_server()