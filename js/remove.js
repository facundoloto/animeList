function remove(container){ //en container pasamos como parametro lo que vamos a borrar dentro de el
    while (container.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
    container.removeChild(container.firstChild); 
    }
    }