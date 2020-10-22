async function fetchData(datasource) {
        let resource = await fetch(datasource).then(response => {
            if(response.status !== 200) {
                throw new Error(`Danger will Robinson! Here there be monsters! Error ${response.status} `);
            }
            return response;
            
        })
        //if we get succes, then we can return back our resource

        let dataset = await resource.json();
        return dataset;

    

    }
    export {fetchData};