# tz-vanity

Utility for generating a command for using `tezos-client` to generate a vanity key pair with capitalization variations on the prefix. This helps the generator find desired name quicker.

```console
$ tz-vanity --seed tezos --name tezos
tezos-client gen vanity keys tezos matching Tezos TEzos TeZos TEZos TezoS TEzoS TeZoS TEZoS --prefix
```

Watch:

> yarn dev

Build:

> yarn build
