// GALLERY (gallery data sent from index)

var list_gallery = "";
var i_lg;
for (i_lg = 0; i_lg < gallery.length; i_lg++) {
  list_gallery += `"<div class='g_tit'><p>${gallery[i_lg].tit}</p></div><div class='g_img'><span style='background-image: url(${gallery[i_lg].img})'></span></div><div class='g_des'><p>${gallery[i_lg].des}</p></div><div class='g_reg'><a href='${gallery[i_lg].url}' target='_top'> ${gallery_btn} </a></div>",`;
}
  
// WINNER (winner data sent from index)

var list_winner = "";
var i_lw;
for (i_lw = 0; i_lw < gallery.length; i_lw++) {
  list_winner += "'" + gallery[i_lw].tit + " : " + gallery[i_lw].des + "',";
}

