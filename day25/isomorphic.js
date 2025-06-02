
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let map1 = {}, map2 = {};

  for (let i = 0; i < s.length; i++) {
    let a = s[i], b = t[i];

    if ((map1[a] && map1[a] !== b) || (map2[b] && map2[b] !== a)) {
      return false;
    }

    map1[a] = b;
    map2[b] = a;
  }

  return true;
}
