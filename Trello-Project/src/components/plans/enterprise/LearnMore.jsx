import React from 'react'
import NavBar from '../../NavBar'
import UniversalFooter from '../../UniversalFooter'

const LearnMore = () => {
  return (
    <>
    <NavBar/>
   
    <div className='bg-blue-800 opacity-75 h-[330px] text-center'>
        <h1 className='pt-14 font-bold text-5xl text-white'>Trust @ Trello</h1><br />
        <h3 className='text-[20px] text-white'>Thousands of businesses use Trello to organize their work with perspective. <br /> These businesses trust Trello to reliably store their files and provide secure <br /> access to their company data.</h3>
        <img className='w-40 ml-170 mt-10' src="https://images.ctfassets.net/rz1oowkt5gyp/2uquMA9NXtKcD7KJFj5Q7I/99673d9eb37884b37f10e399232e9822/trust-shield_2x.png?w=344&fm=webp" alt="" />
    </div>
    <div className='bg-blue-100 h-180'>
    <button className='rounded border-indigo-500 border-1 p-2 w-50 h-12 ml-[43%] mt-35 bg-white hover:bg-blue-100 '>View all the Reports</button>
    <table   className='  h-100 ml-[20%] mt-10 text-[17px] font-medium font-sans '>
        <tbody className=''>
            <tr>
                <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                <td>SOC 2 and SOC 3</td>
                 <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                 <td>ISO/IEC 27001 and ISO/IEC 27018</td>
            </tr>
            <tr>
                <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png"></img></td>
                <td>PCI-DSS certified</td>
                 <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                 <td>SAML 2.0 SSO for Enterprise and Guard customers</td>
            </tr>
            <tr>
                <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                <td>FedRAMP-authorized</td>
                 <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                 <td>Encrypted full backup every 24 hours</td>
            </tr>
            <tr>
                <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                <td>Data encryption in transit and at rest</td>
                 <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                 <td>Internal review from Atlassian’s security intelligence team</td>
            </tr>
            <tr>
                <td><img className='h-12' src="https://images.ctfassets.net/rz1oowkt5gyp/47SqdPgTN8h1hNCIwvkTlg/0d0c61b510d6ac6a9d685ed0a56044af/checkmark_2x.png" alt="" /></td>
                <td>Weekly vulnerability scans and annual penetration tests</td>
               
            </tr>
        </tbody>
    </table>
    </div>
    <section className='text-[20px] mt-20  w-180 ml-[25%] font-sans '>
        <div className='flex gap-2 '>
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/4oaYe6jl94VfcO5A3cWgip/f08a9301b7b41648fc39cad558a38973/trust-icon-security.svg" alt="" />
        <h3 className='font-bold text-2xl'> Security</h3>
        </div>
        <p className='text-[21px]'>For details on the services, policies, processes, and procedures that have  been put in place to make Trello a secure and reliable service for all of our  users, please see <a href=""  className='text-blue-500 underline'>the Operations and Security Page.</a></p>
        <div className='flex pt-15 pb-5'>
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/4myAL1IMpguOLjjnjVSQ2E/e9d7a71dad4f61134fc78cb1eb07dbff/trust-icon-privacy.svg" alt="" />
            <h3 className='font-bold text-2xl'>Legal and Privacy</h3>
        </div>
            <p className='text-[21px]' >Our <a href=""  className='text-blue-500 underline'>Terms of Service</a> and <a href="" className='text-blue-500 underline'>Privacy Policy</a> outline what you agree to when using Trello, and the procedures we take to ensure that  your information is handled responsibly, and in accordance with  applicable data protection and privacy laws. We’re grateful for  your trust, and we’ll act that way.</p>
            <p  className='font-semibold p-3'>EU General Data Protection Regulation (GDPR)</p>
            <p className='text-[21px]'>Trello respects all laws that apply to our business, including  GDPR. Trello appreciates that customers have rights under GDPR and we are committed to respecting those rights, including the <a href="" className='text-blue-500 underline'>Right to Be Forgotten.</a> To learn more about how  we invest resources to maintain GDPR compliance as well as Data Transfers from Europe to the US, <a href=""  className='text-blue-500 underline'>click here.</a></p>
       <div className='flex pt-15 pb-5'>
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/5HsRaRmP0R1kkwfFvMmHml/51fa99e67ef96ef8817785ab5e530543/trust-icon-availability.svg" alt="" />
        <h3  className='font-bold text-2xl'> Availability</h3>
       </div>
       <p className='text-[21px]'>We work to keep Trello available 100% of the time, and Trello experienced 99.99% uptime in 2018. Trello's availability is published in real-time at <a href=""  className='text-blue-500 underline'>www.trellostatus.com</a>, where you can also find our incident history.</p>
        <div className='flex  pt-15 pb-5'>
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/irmyK9glqHJgFfIdHAtQs/3b087fed933ca10e1d1635f1c08dcb67/trust-icon-alert.svg" alt="" />
            <h3 className='font-bold text-2xl'> Need to report a vulnerability?</h3>
        </div>
        <p className='text-[21px] pb-10'>Please submit your report on <a href="" className='text-blue-500 underline'>BugCrowd</a> and our security team will respond as soon as possible.</p>
    </section>
    <UniversalFooter/>

    </>
  )
}

export default LearnMore