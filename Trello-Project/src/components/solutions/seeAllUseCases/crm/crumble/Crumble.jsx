import React from 'react'
import NavBar from '../../../../NavBar'
import { Link } from 'react-router-dom'
import logo1 from '../../../../../assets/logo1.svg'
import logo2 from '../../../../../assets/logo2.svg'
import logo3 from '../../../../../assets/logo3.svg'
import logo4 from '../../../../../assets/logo4.svg'
import logo5 from '../../../../../assets/logo5.svg'
import AtlassianFooter from '../../../taskManagement/AtlassianFooter'
import crmble1 from '../../../../../assets/crmble1.svg'
import crmble2 from '../../../../../assets/crmble2.png'
import crmble3 from '../../../../../assets/crmble3.png'
import crmble4 from '../../../../../assets/crmble4.png'
import crmble5 from '../../../../../assets/crmble5.png'
import crmble6 from '../../../../../assets/crmble6.png'
import crmble7 from '../../../../../assets/crmble7.svg'
import crmble8 from '../../../../../assets/crmble8.svg'
import crmble9 from '../../../../../assets/crmble9.svg'

const Crumble = () => {
  return (
    <>
    <NavBar />
        <div className='h-1210 w-200 m-auto mt-8'>
                <div className='font-normal text-gray-900 text-xs tracking-wider cursor-pointer'>
                    <a href="" className=' hover:underline'>Power-Ups</a> / <a className=' hover:underline'> Crmble</a>
                </div>
                <div className='flex flex-wrap justify-between'>
                    < div className='h-160 sticky top-10 w-50 mt-10'>
                        <img src={crmble1} alt="" height={25} width={200} />
                        <div className='mt-3 flex flex-wrap '>
                            <img src={logo1} alt="" height={3} width={15} /> <span className='text-xs p-1'>Made by Apps Square</span>
                        </div>
                        <div className='  flex flex-wrap justify-around bg-blue-50 rounded mt-2  w-20'>
                            <img src={logo2} alt="" className=' h-5 w-5 relative left-1'/> <span className='text-xs relative right-0 pt-0.5 '>50,000+</span>
                        </div><br /><hr className='border-gray-300 -mt-4'/>
                        <p className='mt-2 font-semibold "text-gray-700 '>Categories</p>
                        <div className='mt-2 -ml-2'>
                            
                            <button className="px-1 ml-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50"> Sales & support</button>
                            <button className="px-1 ml-2 mt-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50 ">HR & operations</button>
                        </div>
                        <hr className='border-gray-300 mt-5' />
                        <img src={logo3} alt="" className='h-4 w-7 relative top-3'/>
                        <Link className="text-xs font-sans no-underline relative -top-2.5 left-7  hover:text-blue-800 hover:underline">Contact support</Link>
                        <img src={logo4} alt="" className='h-4 w-7 relative -top-1.5' />
                        <Link className="text-xs no-underline  relative -top-7 left-7 hover:text-blue-800  hover:underline">Privacy policy</Link>                        
                        <hr className='border-gray-300 -mt-2' />
                        <img src={logo5} alt="" className='h-5 w-8 relative top-6 right-2'/>
                        <p className='text-xs  w-100 relative -top-3 left-6'>Crmble is in compliance with <br /> <span className="text-blue-600 underline hover:cursor-pointer ">Trello's data and privacy <br />
                            practices.</span></p>
                        <hr className='border-gray-300 mt-2'/>

                    </div>
                    <div className=' h-500 w-135  mt-6'>
                        <h1 className='text-2xl font-semibold w-40 mt-2 text-gray-900'> Crmble </h1> <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700  transition  ml-108 relative  -top-10 text-xs font-semibold hover:cursor-pointer">Add Power-Up</button>
                        <img src={crmble2} alt="" /> <br />
                        <Link to="/https://crmble.com/" className="text-xs font-medium underline text-[#5e4db2]   hover:cursor-pointer hover:no-underline">Visita Crmble.com</Link><br /><br />
                        <img src={crmble3} alt="" /> <br /><br />
                        <Link to="" className="text-xs font-medium underline text-[#5e4db2]   hover:cursor-pointer hover:no-underline">Reserva una demo</Link><br /><br />
                        <h2 className='text-2xl font-semibold w-120 mt-3 text-gray-800'>Características añadidas recientemente</h2><br />
                        <img src={crmble4} alt="" /> <br /><br />
                        <Link to="" className="text-xs font-medium underline text-blue-600   hover:cursor-pointer hover:no-underline">Leer más sobre Email y Crmble</Link><br /><br />
                        <h2 className='text-xl font-semibold w-120 mt-3 text-gray-800'>📧 ¡Nuevo! Insignia de notificación de mensajes no leídos</h2>
                        <p className="text-gray-900 mt-3 text-xs w-130 tracking-wide leading-relaxed mb-3 font-medium">Para mejorar tu experiencia de correo electrónico en Crmble, tus tarjetas ahora mostrarán una insignia con el número de mensajes no leídos. Expandir los hilos y leer los mensajes los marcará como leídos, y este estado se replicará en tus servidores de Gmail para mantener todo sincronizado.</p><br />
                        <img src={crmble5} alt="" className='h-60 w-120 ml-4 ' /> <br />
                        <h2 className='text-xl font-semibold w-120 mt-3 text-gray-800'>🤙 ¡Nuevo! Enlace de conversación de WhatsApp</h2>
                        <p className="text-gray-900 mt-4 text-xs w-130 tracking-wide leading-relaxed mb-3 font-medium">Junto al número de teléfono de contacto, ahora encontrarás un nuevo botón de WhatsApp. Este botón te lleva directamente a la conversación en WhatsApp.</p><br />
                        <img src={crmble6} alt=""  className='h-65 w-120 ml-4 '/> <br /><br />
                        <h2 className='text-xl font-semibold w-125 mt-3 text-gray-800'>Convierte tus tableros de Trello en una poderosa pero fácil solución CRM de esta manera:</h2>
                        <ol className="list-decimal list-inside text-xs tracking-wide w-130 mt-2 ml-2 leading-6 font-medium text-gray-800">
                            <li>Crea tu pipeline conectando tus listas de Trello a Crmble como etapas</li>
                            <li>Crea una nueva tarjeta y enlaza un contacto para crear una Oportunidad en Crmble</li>
                            <li>Aumenta tu base de datos de contactos</li>
                            <li>Enlaza un contacto a múltiples tarjetas en varios tableros</li>
                            <li>Personaliza tus campos de contacto y oportunidad para construir una base de datos a <br />&nbsp;&nbsp;&nbsp; medida y consistente</li>
                            <li>Botones en la tarjeta para seguir tus Oportunidades GANADAS/PERDIDAS</li>   
                        </ol>
                        <p className="text-gray-900 mt-3 text-xs w-130 tracking-wide leading-relaxed mb-3 font-medium">Comienza ahora tu prueba gratuita de 10 días. No se requiere tarjeta de crédito ni detalles de pago.</p>
                        <Link to="" className="text-xs font-medium underline text-blue-600  hover:cursor-pointer hover:no-underline">Lee más sobre nuestros planes de precios aquí</Link><br /><br />
                        <h2 className='text-xl font-semibold w-135 mt-3 text-gray-800'>Deja de trabajar en una hoja de cálculo y empieza a ver el panorama completo</h2>
                        <p className="text-gray-900 mt-3 text-xs w-130 tracking-wide leading-relaxed mb-3 font-medium">Gestionar tus oportunidades y contactos en una hoja de cálculo es frustrante y engorroso. Aún más cuando trabajas en equipo. Imagina todas las filas de tu hoja de cálculo convertidas en tarjetas que puedes mover a diferentes etapas, definir su estado y mantener los detalles de contacto organizados con campos personalizados. Simplemente importa tu hoja de cálculo en Crmble y empieza a hacer más en menos tiempo.</p><br />
                        <img src={crmble7} alt="" /><br />
                        <h3  className='text-lg font-semibold w-135 mt-3 text-gray-800'>Panel de control</h3>
                        <ul className=" list-disc list-inside text-xs tracking-wide w-130 mt-1 ml-2 leading-6 font-medium text-gray-800">
                            <li>Resumen de victorias por número de oportunidades o ingresos</li>
                            <li>Establece tus objetivos de ingresos</li>
                            <li>Compara tu rendimiento con períodos anteriores</li>
                            <li>Lista detallada de oportunidades ganadas</li>
                        </ul><br />
                        <img src={crmble8} alt="" /><br />
                        <h3  className='text-lg font-semibold w-135 mt-3 text-gray-800'>Informes</h3>
                        <ul className=" list-disc list-inside text-xs tracking-wide w-130 mt-1 ml-2 leading-6 font-medium text-gray-800">
                            <li>Identifica cuellos de botella gracias al gráfico de embudo</li>
                            <li>Obtén información valiosa sobre tus etapas</li>
                            <li>Para obtener informes visuales personalizados, combina filtros clicables como <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selector de etapa/lista, campos desplegables, fechas, ganadas, perdidas, archivadas,<br />&nbsp;&nbsp;&nbsp;&nbsp; miembros o etiquetas.</li>
                            <li>KPIs para verificar rápidamente la actividad de tus etapas más relevantes</li>
                        </ul><br />
                        <img src={crmble9} alt="" /><br />
                        <h3  className='text-lg font-semibold w-135 mt-3 text-gray-800'>Contactos</h3>
                        <ul className=" list-disc list-inside text-xs tracking-wide w-130 mt-1 ml-2 leading-6 font-medium text-gray-800">
                            <li>Aumenta y mantiene actualizada tu base de datos de contactos</li>
                            <li>Disponible en todos los tableros de tu equipo Crmble</li>
                            <li>Informes individuales de contacto con enlaces a sus correspondientes tarjetas de <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oportunidad</li>
                            <li>Opciones de importación y exportación (Excel/CSV)</li>
                        </ul><br />
                        <h3  className='text-lg font-semibold w-135 mt-3 text-gray-800'>No pierdas ninguna oportunidad</h3>
                        <ul className=" list-disc list-inside text-xs tracking-wide w-130 mt-1 ml-2 leading-6 font-medium text-gray-800">
                            <li>Gestiona tus oportunidades o genera informes en la vista de tabla de oportunidades</li>
                            <li>Importa y exporta oportunidades (Excel/CSV)</li>
                            <li>Aplica filtros rápidos para una creación de informes aún más rápida</li>
                        </ul><br />
                        <h2 className='text-xl font-semibold w-135 mt-3 text-gray-800'>Haz tu Crmble aún más delicioso con nuestros Toppings</h2><br />
                        <h3  className='text-lg font-semibold w-135 mt-3 text-gray-800'>Google Forms & Spreadsheets</h3>
                        <p className="text-gray-900 mt-3 text-xs w-125 tracking-wide leading-relaxed mb-3 font-medium">Conecta una hoja de cálculo de Google con Crmble. Un formulario de Google puede alimentar la hoja de cálculo, así como muchos otros servicios de terceros como Integromat, Contact Form 7 o WP Forms. Como resultado, Crmble creará una nueva tarjeta de oportunidad y agregará un nuevo contacto por cada nueva fila añadida a la hoja.</p>
                        <h3  className='text-lg font-semibold w-135 mt-8 text-gray-800'>Gmail</h3>
                        <p className="text-gray-900 mt-3 text-xs w-125 tracking-wide leading-relaxed mb-3 font-medium">Envía correos electrónicos a tu contacto sin salir de tu tablero y obtén fragmentos útiles de cada mensaje en la actividad de tu tarjeta para seguir la conversación. Funciona con múltiples cuentas conectadas a tu Gmail y captura sus correspondientes firmas de correo electrónico.</p>
                        <h3  className='text-lg font-semibold w-135 mt-8 text-gray-800'>Zapier</h3>
                        <p className="text-gray-900 mt-3 text-xs w-130 tracking-wide leading-relaxed mb-3 font-medium">Conecta casi cualquier aplicación existente con Crmble a través de Zapier. Automatiza la creación de oportunidades y contactos desde muchas fuentes de generación de leads.</p>
                         
                        <h2 className='text-xl font-semibold w-135 mt-8 text-gray-800'>Esto es lo que algunos de nuestros usuarios dicen sobre Crmble</h2>
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 font-medium">Hemos estado usando Crmble en Trello durante un mes y nos ha ayudado enormemente a mantener un seguimiento y organizar nuestros clientes/leads en Trello. Somos un pequeño equipo que usa Trello con tu Power-up para nuestro negocio inmobiliario y realmente apreciamos esta nueva función. También nos alegra ver que se están haciendo nuevas características y mejoras de vez en cuando, así que realmente apreciamos el esfuerzo de tu equipo en crear este Power-Up en primer lugar y trabajar diligentemente para mejorarlo cada vez más.</p>
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 italic font-medium">Nadine Worofka - Socia Gerente en True Living Realty</p>
                        ***
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 font-medium">¡Wow, me encanta! Creo que cualquier persona en ventas en pequeñas empresas en algún momento gestiona su CRM en Trello. Nunca pensé que esto sería posible, ¡gran trabajo y definitivamente lo revisaré!</p>
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 italic font-medium">Hans Dekker</p>
                        ***
                         <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 font-medium">Mejor opción de CRM en Trello.</p>
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 italic font-medium">Ian Dooley - fundador de Benk</p>
                        ***
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 font-medium">Súper fácil de configurar y entender. Ahora finalmente puedo gestionar todos los clientes de mi estudio de grabación de una manera fácil y cómoda.</p>
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 italic font-medium">Moritz Maier - Moritz Maier Music Production</p>
                        ***
                         <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 font-medium">He estado usando Crmble durante unas semanas y no encontré un verdadero CRM en Trello como este antes. Si eres un usuario de Trello para trabajar, deberías probar este power-up, hizo mi vida más fácil. Puedes olvidar los complicados Excels para siempre.</p>
                        <p className="text-gray-900 mt-2  pl-3 border-l-2  border-gray-300 text-xs w-129 tracking-wide leading-relaxed mb-3 italic font-medium">Julio Clavero -<span className="text-xs font-medium underline text-blue-600   hover:cursor-pointer hover:no-underline"> keyandrent.com</span></p>
                        ***
                    </div> 

                </div>
        </div>
         <AtlassianFooter/>
    

       
 
    </>
  )
}

export default Crumble



