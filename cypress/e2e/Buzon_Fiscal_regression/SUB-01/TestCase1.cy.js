import { faker } from '@faker-js/faker';
const randomName = faker.person.firstName();
const randomlastname = faker.person.lastName();
const randomlastnameM = faker.person.lastName();
const randomEmail = faker.internet.email();

Given('The user open Suburbia web page', () => {
 
  cy.visit('/') 
  
});


When('The user Enter to Suburbia webpage select the Login option', () => {
     
   
    cy.xpath('//span[@class="a-header__topLink"]').click({ force: true });
    cy.xpath('//h1[normalize-space()="Inicia sesión"]').should('be.visible').should('have.text','Inicia sesión')

})


Then('The user will be able to see the Sign In section correctly with all its components', () => {
     
  //Seccion de marcas
  cy.xpath("//p[contains(text(),'Recuerda que con una sola cuenta puedes ingresar a')]").should('be.visible').should('have.text','\nRecuerda que con una sola cuenta puedes ingresar a todas nuestras tiendas. ')
  cy.xpath("//img[@title='Liverpool']").should('be.visible')
  cy.xpath("//img[@title='Pottery Barn']").should('be.visible')
  cy.xpath("//img[@title='Pottery Barn Kids']").should('be.visible')
  cy.xpath("//img[@title='Westelm']").should('be.visible')
  cy.xpath("//img[@title='Williams Sonoma']").should('be.visible')
  cy.xpath("//img[@title='GAP']").should('be.visible')
  cy.xpath("//img[@title='Banana Republic']").should('be.visible')

  //Frame

  cy.xpath("//h1[normalize-space()='Inicia sesión']").should('be.visible').should('have.text','Inicia sesión')
  cy.xpath("//input[@id='username']").should('be.visible')
  cy.xpath("//input[@id='password']").should('be.visible')
  cy.xpath("//a[normalize-space()='¿Olvidaste tu contraseña?']").should('be.visible')
  cy.xpath("//button[@class='c64e877fc c55256a89 c283fdb19 c26d7a986 cebfbdd72']").should('have.text','Iniciar sesión')
  cy.xpath("//p[@class='c192ddc3e cfcd4ae5f c87f0cc8e']").should('be.visible')
  cy.xpath("//a[normalize-space()='Crear cuenta']").should('be.visible').should('have.text','Crear cuenta')
  cy.xpath("//span[normalize-space()='Continuar con Apple']").should('be.visible').should('have.text','Continuar con Apple')
  cy.xpath("//span[normalize-space()='Continuar con Facebook']").should('be.visible').should('have.text','Continuar con Facebook')

  //Terminos y condiciones
  cy.xpath("//a[normalize-space()='© Términos y condiciones']").should('be.visible').should('have.text','\n© Términos y condiciones\n')
  cy.xpath("//a[normalize-space()='Aviso de Privacidad © 2021']").should('be.visible').should('have.text','\nAviso de Privacidad © 2021\n') 

})




Given('The user is on the suburbia page in the Sign in section', () => {
 
  cy.xpath('//h1[normalize-space()="Inicia sesión"]').should('be.visible').should('have.text','Inicia sesión')
  
});


When('The user selects Create account', () => {
     
   
    cy.xpath("//a[normalize-space()='Crear cuenta']").should('be.visible').click({ force: true });

})


Then('The user will be able to see the create account section with all its components correctly', () => {
     
  //Seccion de marcas
  cy.xpath("//p[contains(text(),'Recuerda que con una sola cuenta puedes ingresar a')]").should('be.visible').should('have.text','\nRecuerda que con una sola cuenta puedes ingresar a todas nuestras tiendas. ')
  cy.xpath("//img[@title='Liverpool']").should('be.visible')
  cy.xpath("//img[@title='Pottery Barn']").should('be.visible')
  cy.xpath("//img[@title='Pottery Barn Kids']").should('be.visible')
  cy.xpath("//img[@title='Westelm']").should('be.visible')
  cy.xpath("//img[@title='Williams Sonoma']").should('be.visible')
  cy.xpath("//img[@title='GAP']").should('be.visible')
  cy.xpath("//img[@title='Banana Republic']").should('be.visible')

  //Frame

  cy.xpath("//h1[normalize-space()='Crear cuenta']").should('be.visible').should('have.text','Crear cuenta')
  cy.xpath("//input[@id='email']").should('be.visible')
  cy.xpath("//input[@id='password']").should('be.visible')
  cy.xpath("//button[normalize-space()='Crear cuenta']").should('be.visible').should('have.text','Crear cuenta')
  cy.xpath("//p[@class='c192ddc3e cfcd4ae5f c87f0cc8e']").should('be.visible').contains('¿Ya tienes una cuenta?')
  cy.xpath("//a[normalize-space()='Inicia sesión']").should('be.visible').should('have.text','Inicia sesión')
  cy.xpath("//span[normalize-space()='Continuar con Apple']").should('be.visible').should('have.text','Continuar con Apple')
  cy.xpath("//span[normalize-space()='Continuar con Facebook']").should('be.visible').should('have.text','Continuar con Facebook')

  //Terminos y condiciones
  cy.xpath("//a[normalize-space()='© Términos y condiciones']").should('be.visible').should('have.text','\n© Términos y condiciones\n')
  cy.xpath("//a[normalize-space()='Aviso de Privacidad © 2021']").should('be.visible').should('have.text','\nAviso de Privacidad © 2021\n') 

})




Given('The user is in the create account section to validate the system does not allow creating an account', () => {
 
  cy.xpath("//h1[normalize-space()='Crear cuenta']").should('be.visible').should('have.text','Crear cuenta')
  
});


When('The user enters an invalid email', () => {
     
   
    cy.xpath("//input[@id='email']").should('be.visible').type(randomName)
   
    


})


And('A valid password is entered', () => {
     
  cy.xpath("//input[@id='password']").should('be.visible').type('P@ssword1')

})

Then('The website will show an error message in the email and where the password validation will appear.', () => {
     


  cy.xpath("//span[normalize-space()='Al menos 8 caracteres de largo']").should('be.visible')
  cy.xpath("//span[normalize-space()='Letras minúsculas (a-z)']").should('be.visible')
  cy.xpath("//span[normalize-space()='Letras mayúsculas (A-Z)']").should('be.visible')
  cy.xpath("//span[normalize-space()='Números (0-9)']").should('be.visible')
  cy.xpath("//button[normalize-space()='Crear cuenta']").should('be.visible').click({ force: true });
  cy.xpath("//span[@id='error-element-email']").should('be.visible').contains('El correo electrónico no es válido.')



})




Given('The user is in the create account section to validate the system allows the creation of an account', () => {
 
  cy.xpath("//h1[normalize-space()='Crear cuenta']").should('be.visible').should('have.text','Crear cuenta')
  
});


When('The user enters a valid email', () => {
    cy.xpath("//input[@id='email']").clear()
    cy.xpath("//input[@id='email']").should('be.visible').type(randomEmail)
   
    


})


And('Enter a valid password to create the account', () => {
     
  cy.xpath("//input[@id='password']").should('be.visible').type('P@ssword1')
  cy.xpath("//button[normalize-space()='Crear cuenta']").should('be.visible').click({ force: true });
  

})

Then('The system will show us the personal data section where the components will be displayed correctly and the user will be able to fill out correctly to advance to the verification.', () => {

  
  cy.xpath("//div[@class='m-title']").should('be.visible').contains('Ingresa los siguientes datos')
  cy.xpath("//input[@id='input-user__name']").should('be.visible').type(randomName)
  cy.xpath("//input[@id='input-user__apaterno']").should('be.visible').type(randomlastname)
  cy.xpath("//input[@id='input-user__amaterno']").should('be.visible').type(randomlastnameM)
  

  function Day(min,max){
    return Math.round(Math.random()*(max - min) + min); 
    }
    const SelectDay = (Day(1,28));
    cy.xpath("//select[@id='daySelectorLabel']").select(''+SelectDay+'')

    
 
 var optionMonth = ["Ene", "Feb", "Sep", "Dic"];
    for (var n = 0; n < 1; n++) {
        const SelectMonth = (optionMonth[Math.floor(Math.random() * optionMonth.length)])
        cy.xpath("//select[@id='monthSelectorLabel']").select(''+SelectMonth+'')  
    }

  function Year(min,max){
      return Math.round(Math.random()*(max - min) + min); 
      }
      const SelectYear = (Year(1924,2006));
      cy.xpath("//select[@id='yearSelectorLabel']").select(''+SelectYear+'')

  var optionS = ["female", "male"];
      for (var n = 0; n < 1; n++) {
          const SelectS = (optionS[Math.floor(Math.random() * optionS.length)])
          cy.xpath("//input[@class='a-radio__input mdc-radio__native-control']").check(''+SelectS+'')  
      }

      cy.xpath("//a[normalize-space()='Términos, Condiciones y Aviso de Privacidad']").should('be.visible')
      cy.xpath("//button[normalize-space()='Crear cuenta']").should('be.visible').click({ force: true });





})



Given('The user has registered their personal data and is in the Verify Cellular section', () => {
  cy.wait(4000)
  cy.xpath("//h1[normalize-space()='Verificación de celular']").should('be.visible').contains('Verificación de celular')
  cy.xpath("//p[@class='c192ddc3e cfcd4ae5f']").should('be.visible').contains('Para que tu cuenta tenga mayor seguridad ingresa tu número celular')

  
});


When('Select the location and enter phone number', () => {

  cy.xpath("//button[@value='pick-country-code']").should('be.visible').click({ force: true });



  var optionlada = ["Afganistán (+93)","México (+52)","Canada (+1)" ];
  for (var n = 0; n < 1; n++) {
      const Selectlada = (optionlada[Math.floor(Math.random() * optionlada.length)])
      cy.xpath('//span[normalize-space()="'+Selectlada+'"]').click({ force: true });

      if(Selectlada === "México (+52)" ){
        var optionladaMex = ["81","55","33" ];
        for (var n = 0; n < 1; n++) {
          const SelectladaMex = (optionladaMex[Math.floor(Math.random() * optionladaMex.length)])
          function Phone(min,max){
            return Math.round(Math.random()*(max - min) + min); 
            }
            const SelectPhoneMex = (Phone(10000000,60000000));
          cy.xpath("//input[@id='phone']").should('be.visible').type(`${SelectladaMex}${SelectPhoneMex}`)
        }
      }else if(Selectlada === "Canada (+1)"){
        var optionladaCan = ["437","647","416" ];
        for (var n = 0; n < 1; n++) {
          const SelectladaCan = (optionladaCan[Math.floor(Math.random() * optionladaCan.length)])
          function Phone(min,max){
            return Math.round(Math.random()*(max - min) + min); 
            }
            const SelectPhoneCan = (Phone(10000000,60000000));
          cy.xpath("//input[@id='phone']").should('be.visible').type(`${SelectladaCan}${SelectPhoneCan}`)
        } 
        
      }else if(Selectlada === "Afganistán (+93)"){
        var optionladaAfg = ["98","964","92" ];
        for (var n = 0; n < 1; n++) {
          const SelectladaAfg = (optionladaAfg[Math.floor(Math.random() * optionladaAfg.length)])
          function Phone(min,max){
            return Math.round(Math.random()*(max - min) + min); 
            }
            const SelectPhoneAfg = (Phone(10000000,60000000));
            cy.xpath("//input[@id='phone']").should('be.visible').type(`${SelectladaAfg}${SelectPhoneAfg}`)
        }
      
      }
  }

})


Then('The system allows you to advance to Text Code Confirmation', () => {

  cy.xpath("//button[normalize-space()='Continuar']").should('be.visible').click({ force: true });
  



})

And('The Verification Code section will display correctly', () => {

  cy.xpath("//h1[normalize-space()='Código de verificación']").should('be.visible')
  cy.xpath("//p[@class='c192ddc3e cfcd4ae5f']").should('be.visible').contains('Ingresa el código de verificación que hemos enviado vía mensaje de texto al:')
  cy.xpath("//div[@class='c8b34fa42 c89862795 cccab6b39 c819f5a47']").should('be.visible')
  cy.xpath("//input[@id='code']").should('be.visible')
  cy.xpath("//button[normalize-space()='Continuar']").should('be.visible')
  cy.xpath("//button[normalize-space()='Enviar un nuevo código por WhatsApp']").should('be.visible').contains('Enviar un nuevo código por WhatsApp')
  


})




