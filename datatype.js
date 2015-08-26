function dataTypes(num) {
    
    var type = typeof num;
    
    if (type == "object") {
        
        if (num instanceof Array) {
            
            return "Array";
        }
               else {
            
            return "Null"
        }
    
    } 
     else if (type == "string") {
        
        return "String";
    }
       else if (type == "undefined") {
        
        return "undefined";
    }
    
    else if (type == "number") {
        
        if (String(num).indexOf(".") !== -1) {
            
            return "Float"
        }
        
        else {
            return "Integer"
        }
    }
      
    else if (type == "boolean") {
        
        return "Boolean"
    }

    else {
        
        return "Not recognized"
    }
        
}

 dataTypes()
