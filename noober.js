function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

  //1. All Rides event listener
  let allRidesButton = document.querySelector('#all-filter')
  allRidesButton.addEventListener('click', async function(event) {
    event.preventDefault()
    console.log('Clicked "All Rides"')
    //2.1 request the ride data from our "API"
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    // console.log(json)
    //2.2 pass the array of rides to renderRides()
    renderRides(json)
  })

  //3. Noober Purple Event listener
  let nooberPurpleButton = document.querySelector('#noober-purple-filter')
  nooberPurpleButton.addEventListener('click', async function(event) {
    event.preventDefault()
    console.log('Clicked "Noober Purple"')
    //4.1 request the ride data from our "API"
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    // console.log(json)
    //4.2 create a new empty array
    var newArray = []
    // console.log(newArray)
    //4.3 loop through the rides 
    for(i=0; i<json.length; i++) {
    // and for each ride, use the provided levelOfService() function to determine the service level, 
    let rideFilter = levelOfService(json[i])
    //and use newArray.push(ride) to add "Noober Purple" rides into the new array
    if(rideFilter == "Noober Purple") {
      newArray.push(json[i])
    }
    //4.4 pass the new array of filtered rides to the renderRides() function
    renderRides(newArray)
    }
  })


    //Noober Pool Event listener
    let nooberPoolButton = document.querySelector('#noober-pool-filter')
    nooberPoolButton.addEventListener('click', async function(event) {
      event.preventDefault()
      console.log('Clicked "Noober Pool"')
      //request the ride data from our "API"
      let url = 'https://kiei451.com/api/rides.json'
      let response = await fetch(url)
      let json = await response.json()
      // create a new empty array
      var newArray = []
      //loop through the rides, determine LoS, push into newArray
      for(i=0; i<json.length; i++) {
      let rideFilter = levelOfService(json[i])
      if(rideFilter == "Noober Pool") {
        newArray.push(json[i])
      }
      //pass the new array of filtered rides to the renderRides() function
      renderRides(newArray)
      }
    })


        //Noober XL Event listener
        let nooberXLButton = document.querySelector('#noober-xl-filter')
        nooberXLButton.addEventListener('click', async function(event) {
          event.preventDefault()
          console.log('Clicked "Noober XL"')
          //request the ride data from our "API"
          let url = 'https://kiei451.com/api/rides.json'
          let response = await fetch(url)
          let json = await response.json()
          // create a new empty array
          var newArray = []
          //loop through the rides, determine LoS, push into newArray
          for(i=0; i<json.length; i++) {
          let rideFilter = levelOfService(json[i])
          if(rideFilter == "Noober XL") {
            newArray.push(json[i])
          }
          //pass the new array of filtered rides to the renderRides() function
          renderRides(newArray)
          }
        })

        //Noober X Event listener
        let nooberXButton = document.querySelector('#noober-x-filter')
        nooberXButton.addEventListener('click', async function(event) {
          event.preventDefault()
          console.log('Clicked "Noober X"')
          //request the ride data from our "API"
          let url = 'https://kiei451.com/api/rides.json'
          let response = await fetch(url)
          let json = await response.json()
          // create a new empty array
          var newArray = []
          //loop through the rides, determine LoS, push into newArray
          for(i=0; i<json.length; i++) {
          let rideFilter = levelOfService(json[i])
          if(rideFilter == "Noober X") {
            newArray.push(json[i])
          }
          //pass the new array of filtered rides to the renderRides() function
          renderRides(newArray)
          }
        })

})

