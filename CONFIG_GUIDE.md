ByteWorks UK Ltd - Website Configuration Guide

ARCHIVO DE CONFIGURACIÓN CENTRALIZADA
=====================================

Archivo: config.js
Ubicación: Raíz del proyecto (/byteworksuk/)

PROPÓSITO
---------
El archivo config.js contiene toda la información de contacto y configuración del negocio en un único lugar. 
Esto permite actualizar números de teléfono, emails, direcciones y otra información sin tener que modificar 
cada página HTML individualmente.

CONTENIDO DEL ARCHIVO
--------------------

1. BUSINESS_CONFIG - Objeto principal con toda la configuración:
   - name: Nombre del negocio
   - legalName: Nombre legal de la empresa
   - phone: Número de teléfono (formato internacional)
   - email: Email corporativo
   - address: Dirección completa (desglosada y formateada)
   - website: Información del sitio web
   - businessHours: Horarios de operación
   - copyrightYear: Año actual para copyright
   - responseTimes: Tiempos de respuesta esperados

CÓMO MODIFICAR INFORMACIÓN
----------------------------

Para cambiar el número de teléfono:
1. Abre config.js
2. Localiza la línea: phone: '+44 113 123 4567'
3. Reemplaza con el nuevo número: phone: '+44 XXX XXX XXXX'
4. Guarda el archivo
5. Todas las páginas se actualizarán automáticamente

Ejemplo - Cambiar teléfono:
   ANTES: phone: '+44 113 123 4567',
   DESPUÉS: phone: '+44 999 888 7777',

Para cambiar el email:
1. Localiza: email: 'info@byteworksuk.co.uk'
2. Reemplaza con: email: 'newemail@byteworksuk.co.uk'
3. Guarda y las páginas se actualizarán automáticamente

Para cambiar la dirección:
1. Localiza el objeto address
2. Modifica los campos:
   - line1: Primera línea de la dirección
   - line2: Segunda línea de la dirección
   - city: Ciudad
   - postcode: Código postal
   - country: País
   - full: Dirección completa formateada

INTEGRACIÓN EN PÁGINAS HTML
---------------------------

Hay DOS métodos para usar la configuración en páginas HTML:

MÉTODO 1: Usar atributos data (RECOMENDADO)
-------------------------------------------
Este método es más limpio y no requiere JavaScript adicional.

1. En el HEAD del HTML, incluye el script:
   <script src="config.js"></script>

2. En el HTML, usa atributos data:
   
   Para mostrar teléfono:
   <span data-phone-field></span>
   Se convertirá automáticamente en: +44 113 123 4567
   
   Para mostrar email:
   <span data-email-field></span>
   Se convertirá automáticamente en: info@byteworksuk.co.uk
   
   Para mostrar dirección:
   <span data-address-field></span>
   Se convertirá automáticamente en: The Tea Factory, 17 Lower Regent Street, Leeds, LS1 5DL, United Kingdom
   
   Para mostrar nombre de la empresa:
   <span data-business-name></span>
   Se convertirá automáticamente en: ByteWorks UK Ltd
   
   Para mostrar año de copyright:
   <span data-copyright-year></span>
   Se convertirá automáticamente en: 2024 (o el año actual)

Ejemplo en HTML:
   <p>Contacta con nosotros: <span data-phone-field></span></p>
   <p>Email: <span data-email-field></span></p>
   <p>Dirección: <span data-address-field></span></p>
   <p>&copy; <span data-copyright-year></span> <span data-business-name></span></p>

MÉTODO 2: Acceder directamente a valores en JavaScript
------------------------------------------------------

Si necesitas acceder a los valores en JavaScript:

Opción A - Usar el objeto BUSINESS_CONFIG:
   let phone = BUSINESS_CONFIG.phone;
   let email = BUSINESS_CONFIG.email;
   let fullAddress = BUSINESS_CONFIG.address.full;
   let businessName = BUSINESS_CONFIG.legalName;

Opción B - Usar funciones auxiliares:
   let phone = getPhoneNumber();
   let email = getEmail();
   let address = getFullAddress();
   let name = getBusinessName();
   let url = getWebsiteURL();

FUNCIONES DISPONIBLES
---------------------

• getPhoneNumber()        → Retorna el número de teléfono
• getEmail()              → Retorna el email corporativo
• getFullAddress()        → Retorna la dirección completa
• getBusinessName()       → Retorna el nombre legal de la empresa
• getWebsiteURL()         → Retorna la URL del sitio web
• updatePhoneNumbersOnPage()   → Actualiza todos los elementos con data-phone-field
• updateEmailsOnPage()         → Actualiza todos los elementos con data-email-field
• updateAddressOnPage()        → Actualiza todos los elementos con data-address-field
• updateBusinessNameOnPage()   → Actualiza todos los elementos con data-business-name
• updateCopyrightYearOnPage()  → Actualiza todos los elementos con data-copyright-year
• initializeBusinessConfig()   → Ejecuta todas las actualizaciones (se ejecuta automáticamente)

VENTAJAS DE ESTE SISTEMA
------------------------

✓ Cambios en UN SOLO LUGAR afectan a TODAS las páginas
✓ No requiere editar código en cada página HTML
✓ Menos propenso a errores (evita inconsistencias)
✓ Mantenimiento centralizado y fácil
✓ Rápido actualizar información de contacto
✓ Flexibilidad para agregar nuevos campos
✓ Compatibilidad con navegadores modernos
✓ Sin dependencias externas

CÓMO AGREGAR NUEVOS CAMPOS
--------------------------

Si necesitas agregar información adicional:

1. Abre config.js
2. Agrega un nuevo campo al objeto BUSINESS_CONFIG:
   
   Ejemplo:
   fax: '+44 113 123 4568',
   or:
   socialMedia: {
       linkedin: 'https://linkedin.com/company/byteworks',
       twitter: '@byteworks_uk'
   }

3. (Opcional) Crea una función auxiliar:
   function getFax() {
       return BUSINESS_CONFIG.fax;
   }

4. Usa el nuevo campo en HTML con un atributo data o acceso directo.

ESTRUCTURA COMPLETA DEL ARCHIVO
-------------------------------

config.js contiene:

1. BUSINESS_CONFIG - Objeto de configuración principal
2. Funciones auxiliares (get*)
3. Funciones de actualización de página (update*OnPage)
4. Función de inicialización (initializeBusinessConfig)
5. Instrucciones de uso (comentarios)

EL ARCHIVO SE CARGA AUTOMÁTICAMENTE
-----------------------------------

Cuando incluyas el script en una página HTML:
<script src="config.js"></script>

El archivo se ejecutará automáticamente y:
- Buscará todos los elementos con atributos data-*
- Reemplazará su contenido con la información de config.js
- Hará que los enlaces tengan los atributos href correctos
- Actualizará el año de copyright automáticamente

EJEMPLO PRÁCTICO COMPLETO
-------------------------

Si quieres cambiar el número de teléfono de +44 113 123 4567 a +44 555 666 7777:

1. Abre config.js
2. Encuentra esta línea (línea ~18):
   phone: '+44 113 123 4567',

3. Cámbiala a:
   phone: '+44 555 666 7777',

4. Guarda el archivo (Ctrl+S)

5. RESULTADO: Todas las páginas que usen:
   <span data-phone-field></span>
   o que usen getPhoneNumber()
   
   Mostrarán automáticamente: +44 555 666 7777

VERIFICACIÓN
-----------

Para verificar que el sistema funciona:

1. Abre cualquier página HTML en el navegador
2. Abre la consola del navegador (F12)
3. Escribe: BUSINESS_CONFIG.phone
4. Presiona Enter
5. Deberías ver el número de teléfono actual

O comprueba que los valores se muestren correctamente en la página.

TROUBLESHOOTING
---------------

Si no ves los valores actualizados:

1. Verifica que <script src="config.js"></script> esté en el HEAD
2. Asegúrate de que config.js esté en la misma carpeta que los HTML
3. Recarga la página (Ctrl+F5 para limpiar caché)
4. Revisa la consola de navegador (F12) para errores
5. Verifica que los atributos data sean exactos (data-phone-field, no data-phonenumber)

COMPATIBILIDAD
--------------

✓ Todos los navegadores modernos (Chrome, Firefox, Safari, Edge)
✓ Internet Explorer 11+ (con algunas limitaciones)
✓ Dispositivos móviles
✓ Sin dependencias externas ni librerías

MANTENIMIENTO
-----------

• Revisa y actualiza config.js regularmente
• Sincroniza cambios de información en tiempo real
• Haz backup de la configuración si realizas cambios importantes
• Documenta cambios importantes para referencia futura

CONTACTO PARA SOPORTE
--------------------

Para preguntas o problemas con este sistema de configuración,
contacta al equipo técnico de ByteWorks UK:
Email: info@byteworksuk.co.uk
Teléfono: +44 113 123 4567

---
Documento actualizado: Enero 2024
Sistema de configuración versión: 1.0
