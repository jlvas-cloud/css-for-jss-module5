 
 const BREAKPOINT = {
     phonemax: "37.5rem",
     tabletmax: "59.375rem",
     laptopmax: "81.25rem"
 }
 
 
 const Theme = {

    queries:{
        phone: `(max-width: ${BREAKPOINT.phonemax})`,
        tablet: `(max-width: ${BREAKPOINT.tabletmax})`
    }


}


export default Theme;