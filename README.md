## Get Started

```sh
yarn
```

## Development

```sh
yarn run dev
```

## Build

```sh
yarn run build
```

## Please check demo.png so see how it looks like

Because we have only mobile design so i just made it only for mobile, so make sure you run native on simulator and run web on your browser to get the best experience.

### Folder Structure

This monorepo consists of the two workspaces `apps` & `packages`

```bash
mp-home-assigment
└── apps
    ├── native 
    └── web
└── packages
    ├── shared-ui 
    ├── shared-config
    └── shared-app
```

### Apps and Packages

- `apps/native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `apps/web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `packages/shared-ui`: a shared package that contains shared UI components between `web` and `native` applications
- `packages/shared-app`: a shared package that contains shared logic between `web` and `native` applications
- `packages/shared-config`: a shared package that contains shared configuration between `web` and `native` applications

### Technologies

- [Expo](https://docs.expo.dev/) for native development
- [Next.js](https://nextjs.org/) for web development
- [React Native](https://reactnative.dev/) for native development
- [React Native Web](https://necolas.github.io/react-native-web/) for web development
- [NativeWind](https://www.nativewind.dev/) styling solution for native
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
- [Turborepo](https://turborepo.dev/) build system for managing monorepo
- [NativeWind](https://www.nativewind.dev/) for styling solution for native and web
- [Class-Variance-Authority](https://github.com/joshwcomeau/class-variance-authority) for managing Tailwind class variance
