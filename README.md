# Frontend applikationen

## Versioner

- Node: `22.19.0`
- npm: `10.9.3`
- React: `^19.1.1`

## Kom igång

### Ta hem repot

- Navigera dit du vill klona projektet
- klona repot: `git clone https://github.com/Frommflin/fwk-femiral-frontend.git`
- navigera in i repomappen: `cd fwk-femiral-frontend`

### Aktivera rätt node version

- se till att du har nvm installerat
  - om nvm inte är installerat, kör följande kommando i terminalen (bash):
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
  - `\. "$HOME/.nvm/nvm.sh"`
  - Fler alternativ för installation av nvm kan hittas på [Node.js](https://nodejs.org/en/download)
- Installera node-versionen i projektet `nvm install 22`
- Använd den nedladdade versionen (ger också rätt npm version): `nvm use`

### Installera dependencies

`npm install`

### Kör app

`npm run dev`

### Kör storybook

`npm run storybook`
