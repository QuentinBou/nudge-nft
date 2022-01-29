import React from 'react';

export default function Create() {
  return (
      <div className='create-container'>
          <h3>How will we create this ?</h3>
          <p>Creating one or more NFTs is not very complex (in terms of code).
                We will use Node.Js, where we will only have to link all the filters created beforehand.
                Choose numbers of NFTs we want to generate, we can easily add a rarety system too. 
          </p>
          <p>
              The filters are different accessories (headgear, glasses...) details (hair, eyes...), background that will be inserted into NFTs.
              <br/> Filters can be create with PhotoShop, Canvas or any design Software / WebApp.
          </p>
          <p>
              Using generate script will create 1 png file and 1 json file per NFT. To prepare upload we should put all png files and json files in a 'collection' folder.
          </p>
      </div>
  )
}
