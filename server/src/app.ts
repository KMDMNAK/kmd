import { https } from 'firebase-functions'

import app from './server'

exports.api = https.onRequest(app as any)
