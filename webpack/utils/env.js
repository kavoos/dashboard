import { parseArguments } from './helpers'

const parsedArguments = parseArguments()
export const mode = parsedArguments.mode ?? 'production'
export const isDevServer = parsedArguments.isDevServer ?? false
export const isProd = mode === 'production'