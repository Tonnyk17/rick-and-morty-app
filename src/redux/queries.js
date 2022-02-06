
export const CHARACTERS_QUERY = `
    {
        info{
            next
            prev
            pages
        }
        results{
            id
            name
            image
        }
    }
`
export const CHARACTER_QUERY = `
{
    name
    gender
    image
    origin{
      name
    }
    status
    species
}`

export const EPISODES_QUERY =  `
    {
        info{
        next
        prev
        count
        pages
        }
        results{
        name
        id
        }
    }
`

export const EPISODE_QUERY = `
    {
        id
        name
        air_date
        episode
        characters{
            name
            image
            id
        }
        
    }
`