
To build an backend optimized for speed and storage, I would follow these guidelines:

- Use a server side cache like Redis to hold call-heavy data.
- Reduce the size of the data blocks sent to the client side through compression.
- Ineffecient queries can act as bottlenecks holding back an entire system, so I'd optimize database queries as much as possible,
- Preconfigure Nginx proxies for situations where server capacities are being approached.

These are some design approaches I would use for the server side codebase.