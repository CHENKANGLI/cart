$(() => {
  let id = location.search.substring(4);
  let target = ``;
  phoneData.forEach(function(e) {
    if (e.pID == id) {
      target = e;
    }
    return;
  });
  // let target = phoneData.find(e => {
  //   return e.pID == id;
  // });
  $(".summary-price em").text(`¥${target.price}`);
  $(".sku-name").text(target.name);
  $(".preview-img>img").attr("src", target.imgSrc);

  $(".preview-img").on("mouseover", function() {
    let tr = $('<div class="mask"></div><div class="big"></div>');
    $(this).append(tr);
    $('.mask').css('display','block');
  });
});
