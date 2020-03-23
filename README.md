# Password Strenght

Password Strength is a lambda that validates the security of a password and returns whether it is valid or not and its level of security.
This lambda uses the `zxcvbn` module.
## Prerequisites

``` shell
node --version
npm install -g serverless
```

## Commands

``` shell
npm install
sls offline
```

``` shell
offline: Starting Offline: dev/us-east-1.
offline: Offline [http for lambda] listening on http://localhost:3002

   ┌─────────────────────────────────────────────────────────┐
   │                                                         │
   │   GET | http://localhost:3000/dev/password/{password}   │
   │                                                         │
   └─────────────────────────────────────────────────────────┘

offline:
offline: [HTTP] server ready: http://localhost:3000 🚀
```
