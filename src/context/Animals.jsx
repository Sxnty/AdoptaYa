import React, {createContext, useEffect, useState} from 'react'

export const AnimalsContext = createContext();
export const AnimalProvider = ({children}) => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const data = [
            {
                name:'toby',
                animal:'dog',
                img:'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg'
            },
            {
                name:'apolo',
                animal:'dog',
                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/YellowLabradorLooking.jpg/640px-YellowLabradorLooking.jpg'
            },
            {
                name:'lola',
                animal:'dog',
                img:'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg'
            },
            {
                name:'kitty',
                animal:'cat',
                img:'http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg'
            },
            {
                name:'botas',
                animal:'cat',
                img:'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg'
            },
            {
                name:'garfield',
                animal:'cat',
                img:'https://www.thesprucepets.com/thmb/XMb-I4hzef2SyFGabzAPi0WnUJ0=/3000x0/filters:no_upscale():strip_icc()/smartest-cat-breeds-4589754-hero-e192f849d9f1442481c47c932cd36aa8.jpg'
            }            
        ]
        setAnimals(data)
    },[])


    return (
        <AnimalsContext.Provider value={{setAnimals,animals }}>
          {children}
        </AnimalsContext.Provider>
      );
}