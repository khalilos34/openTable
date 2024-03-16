import { Location ,Cuisine} from "@prisma/client";

declare type Restaurant =  {
    id: number;
    name: string;
    main_image: string;
    images: string[];
    close_time: string;
    open_time: string;
    description: string;
    slug: string;
    price: PRICE;  
    location:Location 
    cuisine: Cuisine
   
  }
  declare type RestauranCardType={
     id: number;
     name: string;
     main_image: string;       
     slug: string;
     price: PRICE; 
     location: Location;        
     cuisine: Cuisine;      
  }
  
  declare type Item= {
    id: number;
    name: string;
    description: string;
    price: string;
    restaurant_id: number;
    
    created_at:Date;
    updatupdated_at:Date;
  }
  declare type Menu= {
    menu:Item[]
  }
  

  
  declare type Location = {
    id: number;
    name: string;
    
 
  }
  
  declare type Cuisine= {
    id: number;
    name: string;
    
  }
  
  // Define the PRICE type or enum if it's not already defined
type PRICE =  CHEAP|REGULAR|EXPENSIVE
  