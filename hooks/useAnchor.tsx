export const useAnchor = () => {
    const goto = ( e:any ) => {
        e.preventDefault();
        if( e.target.hash ){
          
          document.querySelector(e.target.hash).scrollIntoView({
            behavior: 'smooth'
          });
        }else{
    
          console.log( e)
        }
    
    }

    return {
        goto
    }
}