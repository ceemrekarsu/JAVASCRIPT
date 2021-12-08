let username =  "cemre"
const DOMAİN =  "phalide.com"
let email = username +  "@" + DOMAİN
let domainPhalidae =  "phalide.com.tr"

let info = ` 
hello ${username} 
welcome to your site! 
your e-mail address: ${email} 
length of e-mail address: ${email.length} 
your debt:  ${(17)* 13.69} TL
time of day information: ${new Date().getHours()} 
`
alert(info)
username = username.toUpperCase()
console.log(username)
console.log(email.search( "@"))
let domain = email.slice(email.search( "@") + 1)
console.log(domain)
console.log (domain.slice(0, domain.indexOf('.')))
domainPhalidae = domainPhalidae.replace( "phalide.com.tr",  "hey")
console.log(domainPhalidae)
console.log(domain.includes('@'))
let firstName =  "FIRST"
let lastName =  "LAST"
let fullName = ` 
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)