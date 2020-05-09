

# SKMS

### Prerequisites

- Node.js

```
yum remove nodejs
curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash -
yum install -y nodejs
```

- Git > 2.5.1

```
yum install -y epel-release
yum remove git
rpm -U https://centos7.iuscommunity.org/ius-release.rpm
yum install -y git2u

git --version
```

- Usage

```
mkdir <your-project-name>
cd <your-project-name>
npm create umi

# Choose ant-design-pro:
 Select the boilerplate type (Use arrow keys)
❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.

npm install
npm start 
```





### Production Install

```
git pull origin master
```

```
npm start 
```

