var findContentChildren = function(g, s) {
    let children = 0
    let sortG = g.sort(function(a,b){return a-b})
    let sortS = s.sort(function(a,b){return a-b})

    for(let i = g.length - 1; i >= 0; i--) {
        if(g[i] <= s[s.length - 1]) {
            children++
            s.pop()
        }
    }
    return children
}