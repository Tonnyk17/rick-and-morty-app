
export const CHARACTERS_QUERY = `
    characters{
        info{
            next
            prev
            pages
        }
        results{
            name
            image
            id
            origin{
            name
            }
            status
            species
            episode{
            id
            }
        }
    }
`