define(["tool","jquery","url"],function(n,u){return{listShop:function(n,t){var e=null;return u.ajax({type:"get",url:n,success:function(n){t(n)}}),e}}});