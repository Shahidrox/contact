var $j=jQuery.noConflict();$j(function(){var e,a,p=$j(".dials ol li"),n=$j(".number");p.click(function(){e=p.index(this),9==e?n.append("*"):10==e?n.append("0"):11==e?n.append("#"):12==e?n.empty():13==e?(a=n.text(),a=a.slice(0,-1),n.empty().append(a)):14==e||n.append(e+1),searchNo(e,n.text())}),$j(document).keydown(function(p){switch(p.which){case 96:n.append("0");break;case 97:n.append("1");break;case 98:n.append("2");break;case 99:n.append("3");break;case 100:n.append("4");break;case 101:n.append("5");break;case 102:n.append("6");break;case 103:n.append("7");break;case 104:n.append("8");break;case 105:n.append("9");break;case 8:a=n.text(),a=a.slice(0,-1),n.empty().append(a);break;case 27:n.empty();break;case 106:n.append("*");break;case 35:n.append("#");break;case 13:$(".pad-action").click(),searchNo(e,n.text());break;default:return}p.preventDefault()})});