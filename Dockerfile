FROM node:20-bookworm-slim

# Install Chromium for Puppeteer & Web scrapers
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    ca-certificates \
    fonts-liberation \
    wget \
    && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
    PORT=5000 \
    NODE_ENV=production

WORKDIR /app

# Copy server package files
COPY server/package*.json ./
RUN npm install --omit=dev

# Copy server code
COPY server/ ./

EXPOSE 5000

CMD ["node", "server.js"]
