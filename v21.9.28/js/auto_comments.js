document.getElementById('auto_comments').innerHTML = `

    <div id="oldComments">
        <div class="fb_comment_wrapper">
            <button onclick="setTimeout(oldComments, 3000); oldCommentAnimate();">View previous comments</button>
            <img id="oldCommentAnimate" src="./img/loadCom.png">
        </div>
    </div>

    <div id="currentComments"></div>

    <div id="newComments"></div>

    <div class="loadnewcomment">
        <span></span>
        <span></span>
        <span></span>
    </div>
`;

document.write(`<script src="js/fb_comments.js"></script>`);

var tbPP1 = `<table class='msn'>
<tr>
    <td class='profile'>
        <center> 
        <div class='facebook_profile facebook_photo' style='background-image: url(`;
var tbPP2 = `);'></div>
</center>
</td>
<td colspan='2'>
<div class='comment'> <font class='name'> `;
var tbPP3 = ` </div>
</td>
</tr><tr>
<td style='height:100%;'></td>
<td colspan='2'>
    <div class='reactions'>
    <span class='react'>Like</span> &#8231; 
    <span class='reply'>Reply</span> &#8231; 
    <span class='justnow'>just now</span>
    </div>
</td>
</tr>
</table>`;

        function oldCommentAnimate() {
            document.getElementById("oldCommentAnimate").classList.add("active");
        }
    
        // for old Comments
        function oldComments() {

            var i = Math.floor(Math.random()*fb.length);
            var s = Math.floor(Math.random()*n_text.length);
            
            // var fbPhotoProfile = fb[i].pp;
            // var fbNameProfile = fb[i].name;
            // var fbPosted = n_text[Math.floor(Math.random()*n_text.length)];
            
            $('.fb_comment_wrapper').first().remove();
            $('#oldComments').prepend(`

                <div class="fb_comment_wrapper">
                    <button onclick="setTimeout(oldComments, 3000); oldCommentAnimate();">View previous comments</button>
                    <img id="oldCommentAnimate" src="./img/loadCom.png">
                </div>
            
                ${tbPP1}`+ fb[Math.floor((i/1)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/1)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((s/1)*((getSeconds+20)/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/2)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/2)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((s/2)*((getSeconds+40)/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/3)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/3)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((s/3)*((getSeconds+60)/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/4)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/4)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((s/4)*((getSeconds+80)/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/5)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/5)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((s/5)*((getSeconds+0)/100))] +`
                ${tbPP3}
                
            `);
        }
        // oldComments();

$(document).ready(function(){
    
        // for curent Comments
        function currentComments() {

            var i = Math.floor(Math.random()*fb.length);
            
            // var fbPhotoProfile = fb[i].pp;
            // var fbNameProfile = fb[i].name;
            // var fbPosted = n_text[Math.floor(Math.random()*n_text.length)];
            
            // $('.fb_comment_wrapper').first().remove();
            $('#currentComments').append(`
            
                ${tbPP1}`+ fb[Math.floor((i/1)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/1)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/2)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/2)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/3)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/3)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/4)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/4)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/5)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/5)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/6)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/6)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/7)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/7)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/8)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/8)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
            
                ${tbPP1}`+ fb[Math.floor((i/9)*(getSeconds/100))].pp +`
                ${tbPP2}`+ fb[Math.floor((i/9)*(getSeconds/100))].name +` </font><br> `+ n_text[Math.floor((Math.random()*n_text.length)*(getSeconds/100))] +`
                ${tbPP3}
                
            `);
        }
        currentComments();

        // for new Comments
        setInterval(newComments, (10000/speedComments));
        function newComments() {
            
            var i = Math.floor(Math.random()*fb.length);
            
            var fbPhotoProfile = fb[i].pp;
            var fbNameProfile = fb[i].name;
            var fbPosted = n_text[Math.floor(Math.random()*n_text.length)];
            
            // $('.fb_comment_wrapper').first().remove();
            $('#newComments').append(`
            
                ${tbPP1}`+ fbPhotoProfile +`
                ${tbPP2}`+ fbNameProfile +` </font><br> `+ fbPosted +`
                ${tbPP3}

            `);
        }
    }
);

