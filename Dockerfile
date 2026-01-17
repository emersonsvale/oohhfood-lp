# Production image - uses pre-built output
FROM node:20-alpine AS runner
WORKDIR /app

# Install curl for healthcheck (required by Coolify)
RUN apk add --no-cache curl

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxtjs

# Copy package files first for dependency installation
COPY --chown=nuxtjs:nodejs package.json package-lock.json* ./

# Install production dependencies only
RUN npm install --omit=dev && \
    npm cache clean --force

# Copy pre-built output (must exist in repository)
COPY --chown=nuxtjs:nodejs .output /app/.output
COPY --chown=nuxtjs:nodejs public /app/public

# Set environment to production
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV PORT=3000
ENV HOST=0.0.0.0

# Switch to non-root user
USER nuxtjs

# Expose port
EXPOSE 3000

# Health check using curl (required by Coolify)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Start the application
CMD ["node", ".output/server/index.mjs"]
