packet
|
application [HTTP/FTP]-------|
| |-- IP
Transport [UDP/TCP]----------|
|
network [IP]
|
Link [WIFI]
|
Physical [Cables]

# UDP

- Lightweight
- 8bytes
- ConnectionLess
- Consistency
- sends data no matter what
- Packet loss- IT doesnt care
- Packets out of order? Doesnt Care
- VERY VERY VERYYYY FAST

# TCP

- Connection-Based
- Three-way-handshake
- Client-server-actual data
- Reliable
- Delivery Acknowledgment
- Retransmission
- in order packet
- congestion control to prevent packet loss
