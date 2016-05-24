var React = require('react');
var ReactDOM = require('react-dom');//libreria para el renderizado de componentes
var classNames = require('classnames');//libreria para el manejo de clases en los componentes 
var serialize = require('form-serialize');//libreria para serializar los datos de un formulario pasado
var CardStack= require('react-cardstack');//Cards para datos 



var $=require('jquery');


var Validations = {
  validationEmpty: function(e) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(e.target.value==""){
            e.target.style.borderColor='rgb(238, 238, 238)';
        }else{ 
            if ( !expr.test(e.target.value) ){
                e.target.style.borderColor='red';
            }else{
                e.target.style.borderColor='green';
                this.setState({value:e.target.value});
            }       
        }
  } 
};

var InputEmail=React.createClass({
    mixins: [Validations],
    getInitialState: function()
    {
        return {
            text:'Enter a valid email',
            value:'',
        };
    },
    render:function(){
        return(

                <input  onChange={this.validationEmpty} name="email"  placeholder={this.state.text}  />
            );
    }    
});

//clase que crea el formulario y lo muestra junto con la lista de tareas
var FormApp = React.createClass({
    mixins: [Validations],
    getInitialState: function()
    {
        return {
            item:this.props.item,
            cssLabel:{
                width: '100%',
                position: 'relative',
                display: 'block',
                padding: '1px',
                color: 'White',
                fontSize: '16px',
                background: 'transparent',
                fontFamily: 'Oswald' 
            },
            cssWrap:{
                padding: '5px',
                border: '1px solid black',
                borderTopWidth: '0px',
                background: '#00467f', 
            },
            workingData:false,
            textSubmit:'Send >>',
            enviado:'',            
        };
    },
    componentWillReceiveProps:function(nextProps){
    	this.setState({item:nextProps});
    },

    handleSubmit: function(e)
    {
        e.preventDefault();
        var self=e.target;
        var form = serialize(e.target);
        console.log(form);

        if(this.email.state.value!="" && this.name.value && form!=""){
            
            $.ajax({
                  url:'https://www.royalresorts.com/contact-us.php',
                  datatype: 'text/html',
                  crossDomain: true,
                  method:'post',
                  data:form,
                  beforeSend:function(xhr){
                    this.setState({textSubmit:"Sending.."});
                    this.setState({workingData: true});//se pasa true de que la info si se envio 
                  }.bind(this),
                  success: function(data) {
                    
                    

                    if(data.code!="2" || data.code!="0"){
                        this.setState({enviado:"Your message has been sent!"});
                        this.setState({textSubmit:"Send >>"});
                        this.setState({workingData: false});//se pasa true de que la info si se envio 
                        self.reset();//se resetea el formulario
                    }

                    
                  }.bind(this),
                  error: function(xhr, status, err) {
                    console.log(status, err.toString());
                  }.bind(this)
                });
        }   

    },
    render: function()
    {


    	var component=function(item){
		         return(<div>
		            	
		            </div>);
		        }

    	switch(this.props.item){
    		case "1":		        
		         return(
                        <a href="https://app.royalresorts.com/forms/airport_transfers.aspx" ><img src="https://www.royalresorts.com/wp-content/uploads/2016/05/airporttransfers.png" /></a>
                    );		        
    			;break;
    		case "2":		       
		         return(
                        <form style={this.state.cssWrap} onSubmit={this.handleSubmit}>
                            <label className="center-aling" style={this.state.cssLabel}> We'll contact you soon</label>
                            <label style={this.state.cssLabel} >Name</label>  
                            <input ref={(ref) => this.name = ref} type="text" name="name" value={this.state.text} />                        
                            <label style={this.state.cssLabel} >Email</label>  
                            <InputEmail  ref={(ref) => this.email = ref} />
                            <Button send={this.state.workingData} onClick={this.handleSubmit} text={this.state.textSubmit} type="submit"/>
                            <label className="center-aling red-text" style={this.state.cssLabel} >{this.state.enviado}</label>
                        </form>
                    );		        
    			;break;
    		default:
 		         return(<div>
		            	
		            </div>);
		        
    		;break;	


    	}

		

    }
});


var Container=React.createClass({
    getInitialState: function()
    {
        return {
            item:0,            
            divStyle : {
                width: 'auto',
                position: 'fixed',
                bottom: 0+'px',
                right: 5+'%',
                padding:'15px 10px 10px 10px',
                border:'0px solid #9c9c9c',
               'borderRadius': '5px 5px 5px 5px',
                zIndex: '1030',
            }            
        };
    },
    onClick:function(e)
    {	
    	console.log(e.target); 
    	var itemSelected=e.target.attributes.getNamedItem('data-tab').value;
    	//console.log(itemSelected); 

    	if(this.state.item==itemSelected){
    		this.setState({item:0});    		
    	}else{
			this.setState({item:itemSelected });			       	   		
    	}
    	//console.log(this.state.item); 
        e.target.attributes.getNamedItem('data-press').value=true;        
    },
    clase:function(e){
            if(this.state.item==e){ 
                return true;
            }else{
                return false;
            }
    },    
	render:function(){


		return(
			<div style={this.state.divStyle} className="wrap-form-contact">
				<div>
					<Tabs tab={1}  onClick={this.onClick} press={this.clase(1)} text="Airport Transfers" />
                    <Tabs tab={2}  onClick={this.onClick} press={this.clase(2)} text="Customized Vacations" />
                    <Tabs tab={0}  onClick={this.onClick} press={this.clase(0)} text="X" />				
				</div>
                <FormApp f={this.onClick} item={this.state.item} />

			</div>
		);
	}
});


var Tabs=React.createClass({
    getInitialState: function()
    {
        return {
            item:0,
            isHovered:false,
            selected:this.props.press,       
                     
        };
    },
    componentWillReceiveProps:function(nextProps){
        console.log(nextProps.press);
        this.setState({selected:nextProps.press});        
    },            
    hover:function(e){
        this.setState({isHovered:true});
        this.setState({
            itemTempStyle: this.state.itemActiveStyle
        })
    },
    hoverOut:function(e){
       this.setState({isHovered:false});
        this.setState({
            itemTempStyle: this.state.itemStyle
        })       
    },
    render:function(){
        
        var btnClass = classNames({
          'item-react': true,
          'item-react-over': this.state.isHovered,
          'item-react-clicked': this.state.selected,
        });       
        return(
        
            <a href="#" onClick={this.props.onClick} className={btnClass} onMouseOut={this.hoverOut} onMouseOver={this.hover} style={this.state.itemTempStyle} data-press={this.props.press} data-tab={this.props.tab} >{this.props.text}</a>
        
        );
    }     

});



var Button=React.createClass({
    getInitialState: function()
    {
        return {
            isHovered:false,
            selected:false, 
            text:this.props.text,
            type:this.props.type,
            send:this.props.send,                     
        };
    },
    componentWillReceiveProps:function(nextProps){
        console.log(nextProps);
        this.setState({send:nextProps.send});        
        this.setState({text:nextProps.text});


    },         
    render:function(){
        var btnClass = classNames({
              'btn-react': true,
              'btn-react-over': this.state.isHovered,
              'btn-react-clicked': this.state.selected,
              'btn-react-disabled': this.state.send,
         });
         
        
        return(
            <button disabled={(this.state.send)?'disabled':null} type={this.state.type} className={btnClass}>{this.state.text}</button>
        );

    }  
});


var Container1=React.createClass({
    handleCardClick:function(e) {
    console.log(e);
    },
    render:function(){
        return(
            <CardStack.CardStack
                height={500}
                width={400}
                background='#f8f8f8'
                hoverOffset={25}>
                <CardStack.Card background='#2980B9' cardClicked={this.handleCardClick}>
                    <h1>Number 1</h1>
                </CardStack.Card>

                <CardStack.Card background='#27AE60'>
                    <h1>Number 2</h1>
                </CardStack.Card>
                </CardStack.CardStack>
        );
    }
});

ReactDOM.render(<Container />, document.getElementById('form-contact-react')); 
















