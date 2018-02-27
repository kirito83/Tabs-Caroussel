function showStuff(element)  {
    // acquisition
    var tabContents = document.getElementsByClassName('tabContent');
    // cacher les éléments
    for (var i = 0; i < tabContents.length; i++) { 
        tabContents[i].style.display = 'none';
    }

    // récupérer l'id
    var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
    // afficher avec l'id correspondant
    document.getElementById(tabContentIdToShow).style.display = 'block';
}