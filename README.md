# tz-vanity

Utility for generating a command for using `tezos-client` to generate a vanity key pair with capitalization variations on the prefix. This helps the generator find desired name quicker.

Install:

> yarn global add tz-vanity

or

> npm install --global tz-vanity

Run:

```console
$ tz-vanity --seed tezos --name tezos
tezos-client gen vanity keys tezos matching Tezos TEzos TeZos TEZos TezoS TEzoS TeZoS TEZoS --prefix
```

## Development

Watch:

> yarn dev

Build:

> yarn build

## Other

Donations kindly accepted at **noforks.tez**
