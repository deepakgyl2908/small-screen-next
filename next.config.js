module.exports = {
     exportPathMap: async function (
          defaultPathMap,
          { dev, dir, out, distDir, buildId }
     ) {
          return {
               '/': { page: '/' },
               '/team': { page: '/team' },


               '/work/animation/index': { page: '/work/animation' },
               '/work/brandFilms/index': { page: '/work/brandFilms' },
               '/work/digital/index': { page: '/work/digital' },
               '/work/productFilms/index': { page: '/work/productFilms' },
               '/work/tvc/index': { page: '/work/tvc' },
               '/work/tvShows/index': { page: '/work/tvShows' },


               '/work/animation/hero': { page: '/work/animation/[item]', query: { pathname: 'hero' } },
               '/work/animation/hitachi_ac': { page: '/work/animation/[item]', query: { pathname: 'hitachi_ac' } },
               '/work/animation/hitachi_iclean': { page: '/work/animation/[item]', query: { pathname: 'hitachi_iclean' } },
               '/work/animation/hitachi_odour': { page: '/work/animation/[item]', query: { pathname: 'hitachi_odour' } },
               '/work/animation/coke': { page: '/work/animation/[item]', query: { pathname: 'coke' } },
               '/work/animation/hp': { page: '/work/animation/[item]', query: { pathname: 'hp' } },
               '/work/animation/facebook': { page: '/work/animation/[item]', query: { pathname: 'facebook' } },
               '/work/animation/coke_training': { page: '/work/animation/[item]', query: { pathname: 'coke_training' } },
               '/work/animation/optum': { page: '/work/animation/[item]', query: { pathname: 'optum' } },


               '/work/brandFilms/hero': { page: '/work/brandFilms/[item]', query: { pathname: 'hero' } },
               '/work/brandFilms/hitachi': { page: '/work/brandFilms/[item]', query: { pathname: 'hitachi' } },
               '/work/brandFilms/indigo': { page: '/work/brandFilms/[item]', query: { pathname: 'indigo' } },
               '/work/brandFilms/hitachi_csr': { page: '/work/brandFilms/[item]', query: { pathname: 'hitachi_csr' } },
               '/work/brandFilms/genpact': { page: '/work/brandFilms/[item]', query: { pathname: 'genpact' } },
               '/work/brandFilms/hero_insurance': { page: '/work/brandFilms/[item]', query: { pathname: 'hero_insurance' } },
               '/work/brandFilms/hitachi_corporate': { page: '/work/brandFilms/[item]', query: { pathname: 'hitachi_corporate' } },
               '/work/brandFilms/afcons': { page: '/work/brandFilms/[item]', query: { pathname: 'afcons' } },
               '/work/brandFilms/dpworld': { page: '/work/brandFilms/[item]', query: { pathname: 'dpworld' } },


               '/work/digital/hitachi_suraj': { page: '/work/digital/[item]', query: { pathname: 'hitachi_suraj' } },
               '/work/digital/hitachi_fresh': { page: '/work/digital/[item]', query: { pathname: 'hitachi_fresh' } },
               '/work/digital/hitachi_clean': { page: '/work/digital/[item]', query: { pathname: 'hitachi_clean' } },
               '/work/digital/coke': { page: '/work/digital/[item]', query: { pathname: 'coke' } },
               '/work/digital/coke2': { page: '/work/digital/[item]', query: { pathname: 'coke2' } },
               '/work/digital/lenscrafters': { page: '/work/digital/[item]', query: { pathname: 'lenscrafters' } },
               '/work/digital/park_hotel': { page: '/work/digital/[item]', query: { pathname: 'park_hotel' } },
               '/work/digital/zomato': { page: '/work/digital/[item]', query: { pathname: 'zomato' } },
               '/work/digital/groom_barabar': { page: '/work/digital/[item]', query: { pathname: 'groom_barabar' } },
               '/work/digital/chivas': { page: '/work/digital/[item]', query: { pathname: 'chivas' } },
               '/work/digital/ted': { page: '/work/digital/[item]', query: { pathname: 'ted' } },
               '/work/digital/bpft': { page: '/work/digital/[item]', query: { pathname: 'bpft' } },
               '/work/digital/asian_paints': { page: '/work/digital/[item]', query: { pathname: 'asian_paints' } },
               '/work/digital/glenlivet': { page: '/work/digital/[item]', query: { pathname: 'glenlivet' } },
               '/work/digital/kfc': { page: '/work/digital/[item]', query: { pathname: 'kfc' } },
               '/work/digital/mother_dairy': { page: '/work/digital/[item]', query: { pathname: 'mother_dairy' } },
               '/work/digital/nestle': { page: '/work/digital/[item]', query: { pathname: 'nestle' } },
               '/work/digital/nestle_milkmail': { page: '/work/digital/[item]', query: { pathname: 'nestle_milkmail' } },
               '/work/digital/mothers_recipe': { page: '/work/digital/[item]', query: { pathname: 'mothers_recipe' } },
               '/work/digital/google_adwords': { page: '/work/digital/[item]', query: { pathname: 'google_adwords' } },


               '/work/productFilms/mofpi': { page: '/work/productFilms/[item]', query: { pathname: 'mofpi' } },
               '/work/productFilms/ncw': { page: '/work/productFilms/[item]', query: { pathname: 'ncw' } },
               '/work/productFilms/farishte': { page: '/work/productFilms/[item]', query: { pathname: 'farishte' } },
               '/work/productFilms/harmoni': { page: '/work/productFilms/[item]', query: { pathname: 'harmoni' } },
               '/work/productFilms/corona': { page: '/work/productFilms/[item]', query: { pathname: 'corona' } },
               '/work/productFilms/dengue': { page: '/work/productFilms/[item]', query: { pathname: 'dengue' } },
               '/work/productFilms/ev': { page: '/work/productFilms/[item]', query: { pathname: 'ev' } },
               '/work/productFilms/parali': { page: '/work/productFilms/[item]', query: { pathname: 'parali' } },
               '/work/productFilms/vigyan': { page: '/work/productFilms/[item]', query: { pathname: 'vigyan' } },
               '/work/productFilms/fauji': { page: '/work/productFilms/[item]', query: { pathname: 'fauji' } },
               '/work/productFilms/yoga_day': { page: '/work/productFilms/[item]', query: { pathname: 'yoga_day' } },
               '/work/productFilms/track_man': { page: '/work/productFilms/[item]', query: { pathname: 'track_man' } },
               '/work/productFilms/dri': { page: '/work/productFilms/[item]', query: { pathname: 'dri' } },
               '/work/productFilms/music': { page: '/work/productFilms/[item]', query: { pathname: 'music' } },
               '/work/productFilms/ignore': { page: '/work/productFilms/[item]', query: { pathname: 'ignore' } },
               '/work/productFilms/phfi': { page: '/work/productFilms/[item]', query: { pathname: 'phfi' } },
               '/work/productFilms/chpp': { page: '/work/productFilms/[item]', query: { pathname: 'chpp' } },
               '/work/productFilms/organ_donation': { page: '/work/productFilms/[item]', query: { pathname: 'organ_donation' } },
               '/work/productFilms/ukeri': { page: '/work/productFilms/[item]', query: { pathname: 'ukeri' } },


               '/work/tvc/splender': { page: '/work/tvc/[item]', query: { pathname: 'splender' } },
               '/work/tvc/destini': { page: '/work/tvc/[item]', query: { pathname: 'destini' } },
               '/work/tvc/india_homes': { page: '/work/tvc/[item]', query: { pathname: 'india_homes' } },
               '/work/tvc/uninor': { page: '/work/tvc/[item]', query: { pathname: 'uninor' } },
               '/work/tvc/dabur': { page: '/work/tvc/[item]', query: { pathname: 'dabur' } },


               '/work/tvShows/omg': { page: '/work/tvShows/[item]', query: { pathname: 'omg' } },
               '/work/tvShows/great_britain': { page: '/work/tvShows/[item]', query: { pathname: 'great_britain' } },
               '/work/tvShows/go_india': { page: '/work/tvShows/[item]', query: { pathname: 'go_india' } },
               '/work/tvShows/discovery': { page: '/work/tvShows/[item]', query: { pathname: 'discovery' } },
               '/work/tvShows/thalis': { page: '/work/tvShows/[item]', query: { pathname: 'thalis' } },
               '/work/tvShows/bp': { page: '/work/tvShows/[item]', query: { pathname: 'bp' } },
               '/work/tvShows/oppo': { page: '/work/tvShows/[item]', query: { pathname: 'oppo' } },
               '/work/tvShows/highway_on_my_plate': { page: '/work/tvShows/[item]', query: { pathname: 'highway_on_my_plate' } },
               '/work/tvShows/vital_stats': { page: '/work/tvShows/[item]', query: { pathname: 'vital_stats' } },
               '/work/tvShows/new_india': { page: '/work/tvShows/[item]', query: { pathname: 'new_india' } },
               '/work/tvShows/whats_with': { page: '/work/tvShows/[item]', query: { pathname: 'whats_with' } },
               '/work/tvShows/conde_nast': { page: '/work/tvShows/[item]', query: { pathname: 'conde_nast' } },
               '/work/tvShows/greenco': { page: '/work/tvShows/[item]', query: { pathname: 'greenco' } },
               '/work/tvShows/ayurveda': { page: '/work/tvShows/[item]', query: { pathname: 'ayurveda' } },
               '/work/tvShows/god_of_grains': { page: '/work/tvShows/[item]', query: { pathname: 'god_of_grains' } },
               '/work/tvShows/lufthansa': { page: '/work/tvShows/[item]', query: { pathname: 'lufthansa' } },
               '/work/tvShows/loreal': { page: '/work/tvShows/[item]', query: { pathname: 'loreal' } },
          }
     }
}
