const { Ed25519Provider } = require('key-did-provider-ed25519')
const KeyDidResolver = require('key-did-resolver').default
const { DID } = require('dids')
const { IDX } =require('@ceramicstudio/idx')
const {CeramicClient} = require('@ceramicnetwork/http-client')
const { TileDocument } = require('@ceramicnetwork/stream-tile')
const API_URL='https://ceramic-clay.3boxlabs.com'
const aliases = {
    alias1: 'Solana',
  }
const ceramic = new CeramicClient(API_URL)

const idx = new IDX({ ceramic, aliases })
const seed = new Uint8Array([
    6, 190, 125, 152,  83,   9, 111, 202,
    6, 214, 218, 146, 104, 168, 166, 110,
  202, 171,  42, 114,  73, 204, 214,  60,
  112, 254, 173, 151, 170, 254, 250,   2
])
const authenticate=async()=>{
const provider = new Ed25519Provider(seed)
const resolver = KeyDidResolver.getResolver()
ceramic.did = new DID({ provider, resolver })
await ceramic.did.authenticate()
console.log(ceramic.did.id)

}


authenticate();