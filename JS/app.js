import { myinfo } from "./info.js"
import { myimage } from "./img.js"
import { mycard } from "./card.js"






const data = {
    title : " This is title : U can use title if tou want",
    para : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, culpa nobis facilis ipsam iure ipsum, deserunt expedita amet repudiandae, dolorum quibusdam aliquam doloribus esse nemo quidem suscipit enim. Fugit, voluptate.",
    button : "Contact us",
    myImage: "../image/p2.jpg"
}

const data2 = {
    title1 : "PROJECT COMPLETED",
    para1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, culpa nobis facilis ipsam iure ipsum, deserunt expedita amet repudiandae, dolorum quibusdam aliquam doloribus esse nemo quidem suscipit enim. Fugit, voluptate.",
    para2 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, culpa nobis facilis ipsam iure ipsum, deserunt expedita amet repudiandae, dolorum quibusdam aliquam doloribus esse nemo quidem suscipit enim. Fugit, voluptate.",
    para3 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, culpa nobis facilis ipsam iure ipsum, deserunt expedita amet repudiandae, dolorum quibusdam aliquam doloribus esse nemo quidem suscipit enim. Fugit, voluptate.",
    button1 : "Learn more",
    button2 : "Learn more",
    button3 : "Learn more",
    myImage1 : "../image/p1.jpg",
    myImage2 : "../image/p3.jpg",
    myImage3 : "../image/p5.jpg",

}

const { title ,  para, myImage, button } = data
let sectionOne = document.getElementById("sectionOne")

const { title1, myImage1, myImage2, myImage3, para1, para2,  para3, button1, button2, button3} = data2
let sectionTwo = document.getElementById("sectionTwo")


sectionOne.append(myinfo(title, para, button))
sectionOne.append(myimage(myImage))
sectionTwo.append(mycard(title1, myImage1, myImage2, myImage3, para1,para2,para3, button1, button2, button3))