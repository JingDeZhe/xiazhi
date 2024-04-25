# 如何生成自签名的 SSL 证书

## 安装

如果没有安装 OpenSSL，则需要先安装，OpenSSL 官方并没有提供 Windows 的安装包，我们可以自行编译，或者直接获取别人编译好的版本，这里直接使用编译好的版本: [OpenSSL EXE](https://slproweb.com/products/Win32OpenSSL.html)，下载安装就行。

```bash
PS C:\Users\x> openssl -v
OpenSSL 3.3.0 9 Apr 2024 (Library: OpenSSL 3.3.0 9 Apr 2024)
```

## 生成证书

要使用 OpenSSL 生成测试用的 SSL 证书，你可以遵循以下步骤来创建一个自签名的证书，这个证书将用于测试目的，并不适合在生产环境中使用。

1. **生成私钥**：
   首先，你需要生成一个私钥文件。这个私钥将用于签署你的证书。

   ```bash
   openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
   ```

   这条命令将生成一个 2048 位的 RSA 私钥，并将其保存在 `private_key.pem` 文件中。

2. **创建证书请求**：
   接下来，使用你的私钥创建一个证书签名请求（CSR）。

   ```bash
   openssl req -new -key private_key.pem -out csr.pem
   ```

   在执行这个命令时，OpenSSL 会提示你输入一些信息，如国家/地区、组织、常用名等。对于测试证书，你可以随意填写这些信息，或者直接使用默认值。

3. **自签名证书**：
   现在，你可以使用私钥对 CSR 进行自签名，从而生成一个测试用的 SSL 证书。

   ```bash
   openssl x509 -req -days 365 -in csr.pem -signkey private_key.pem -out certificate.pem
   ```

   这个命令将使用你的私钥对 CSR 进行签名，并生成一个有效期为 365 天的证书，你可以根据需要调整有效期。

完成上述步骤后，你将拥有两个文件：`private_key.pem`（私钥）和 `certificate.pem`（证书），这两个文件将用于配置你的 HTTPS 服务器。

请注意，自签名证书在生产环境中通常不被信任，因为它们不是由受信任的证书颁发机构（CA）签发的。然而，对于本地测试和开发环境来说，它们是足够的。如果你需要在生产环境中使用 SSL 证书，你应该从受信任的 CA 处获取证书。
