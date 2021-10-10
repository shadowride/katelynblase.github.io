document.write(`
<script>
var fuse = [
  "I hope I win! I Registered" + abc + img_reg_RAN + react + xyz,
  "I hope I win! I Registered" + abc + img_reg_RAN + react + xyz,
  "I hope I win! I Registered" + abc + img_reg_RAN + react + xyz,
  "I Love You",
  "Pick Me Please" + please,
  "Awesome good!" + please,
  "God Bless You" + please,
  "I Love You" + heart,
  "I share this",
  "win",
  "I love this" + heart,
  "Amen",
  "Give me please!" + please,

  heart
];
</script>
`);

// FB-PEOPLECOMMENTS (fuse between text + emoji @var)
var r_tRC = Math.floor(fuse.length * Math.random());
var input_fuse = fuse[r_tRC] ;
    var fusion_com_emo = ``;
    var i_tRC;
    for (i_tRC = 0; i_tRC < fuse.length; i_tRC++) {
      fusion_com_emo += `"` + input_fuse + `",`;
    }
    
// Sticker
        var r_imgRC = Math.floor(sticker.length * Math.random());
        var input_sticker = sticker[r_imgRC] ;
            var sticker_Comments = "";
            var i_imgRC;
            for (i_imgRC = 0; i_imgRC < sticker.length; i_imgRC++) {
              sticker_Comments += `"` + `${abc}<img class='sticker' width='80px' height='80px' src='` + input_sticker + `' alt='sticker'>${xyz}",`;
            }   
// large images
        var r_imgRC = Math.floor(img_big.length * Math.random());
        var input_img_big = img_big[r_imgRC] ;
            var img_big_Comments = "";
            var i_imgRC;
            for (i_imgRC = 0; i_imgRC < img_big.length; i_imgRC++) {
              img_big_Comments += `"` + `${abc}<img class='img_large' src='` + input_img_big + `' alt='img_large'>${xyz}",`;
            }
            
// FB-PEOPLECOMMENTS (text sent at index)
var r_tRC = Math.floor(textRandomComments.length * Math.random());
var input_textRandomComments = textRandomComments[r_tRC] ;
    var text_Comments = ``;
    var i_tRC;
    for (i_tRC = 0; i_tRC < textRandomComments.length; i_tRC++) {
      text_Comments += `"` + input_textRandomComments + `",`;
    }
// FB-PEOPLECOMMENTS (img sent at index)
var r_imgRC = Math.floor(imgRandomComments.length * Math.random());
var input_imgRandomComments = imgRandomComments[r_imgRC] ;
    var img_Comments = ``;
    var i_imgRC;
    for (i_imgRC = 0; i_imgRC < imgRandomComments.length; i_imgRC++) {
      img_Comments += `"` + imgRandomComments[r_imgRC].txt + `${abc}<img class='img_` + imgRandomComments[r_imgRC].sml + `' src='` + imgRandomComments[r_imgRC].img + `' alt='post'>${xyz}",`;
    }
    
  
document.write(`
<script>
var n_text = [
`
+ text_Comments
+ img_Comments 
+ sticker_Comments
+ img_Comments
+ img_big_Comments
+ fusion_com_emo
+ `
"Hai"
];
</script>
  `);
  
var it = Math.floor( n_text.length * Math.random() );
