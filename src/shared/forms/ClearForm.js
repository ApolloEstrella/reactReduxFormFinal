function clearForms() {
    // variable declaration
    var x, y, z, type = null;
    // loop through forms on HTML page
    for (x = 0; x < document.forms.length; x++) {
        // loop through each element on form
        for (y = 0; y < document.forms[x].elements.length; y++) {
            // define element type
            type = document.forms[x].elements[y].type;
            // alert before erasing form element
            //alert('form='+x+' element='+y+' type='+type);
            // switch on element type
            switch (type) {
            case 'text':
            case 'textarea':
            case 'password':
            case  'number':
            //case "hidden":
                document.forms[x].elements[y].value = '';
                break;
            case 'radio':
            case 'checkbox':
                document.forms[x].elements[y].checked = false;
                break;
            case 'select-one':
                document.forms[x].elements[y].options[0].selected = false;
                break;
            case 'select-multiple':
                for (z = 0; z < document.forms[x].elements[y].options.length; z++) {
                    document.forms[x].elements[y].options[z].selected = false;
                }
                break;
            default:
              break;    
            } // end switch
        } // end for y
    } // end for x
  }

  export default clearForms;