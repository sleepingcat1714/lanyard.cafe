export interface Member {
  url: string;
  name: string;
  buttonUrl?: string;
}

export const MEMBERS: Member[] = [
  {
    url: "https://schuh.wtf",
    name: "schuh",
    buttonUrl: "https://cdn.venqoi.lol/schuh.gif",
  },
  {
    url: "https://aureal.dev",
    name: "aureal",
    buttonUrl: "https://raw.githubusercontent.com/NPSummers/NPSummers/refs/heads/main/button.png",
  },
  {
    url: "https://akryst.moe",
    name: "akryst",
    buttonUrl: "https://akryst.moe/88x31/akryst.gif",
  },
  {
    url: "https://moli.codes",
    name: "f1sh",
    buttonUrl: "https://raw.githubusercontent.com/NPSummers/NPSummers/refs/heads/main/doesnt_want_to_host_his_own_gif_moli.gif",
  },
  {
      url: "https://plxne.com",
      name: "Ranger",
      buttonUrl: "https://files.plxne.com/raw/nRH5kX.gif",
  }, 
  {
    url: "https://kie.ac",
    name: "kie.ac",
    buttonUrl: "https://kie.ac/88x31/button.png"
  },
  {
    url: "https://nichind.dev",
    name: "nichind",
    buttonUrl: "https://nichind.dev/88x31.gif"
  },
  {
    url: "https://brookerslyn.space",
    name: "brook",
    buttonUrl: "https://cdn.brookerslyn.space/Screenshot%202026-05-10%20222237(1)(1).png"
  },
  {
    url: "https://assumi.ng",
    name: "catcatcat",
    buttonUrl: "https://assumi.ng/assets/88x31/assuming.gif"
  },
  {
    url: "https://c.stupid.cat",
    name: "clove",
    buttonUrl: "https://c.stupid.cat/assets/88x31/doughmination.gif"
  },
];

export function getMemberByUrl(url: string): Member | undefined {
  const hostname = url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  return MEMBERS.find((m) => {
    const mHost = m.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    return mHost === hostname;
  });
}

export function getAdjacentMembers(currentUrl: string): { prev: Member; next: Member } {
  const index = MEMBERS.findIndex((m) => m.url === currentUrl);
  if (index === -1) {
    const lastIdx = MEMBERS.length - 1;
    return { prev: MEMBERS[lastIdx]!, next: MEMBERS[0]! };
  }
  const prev = MEMBERS[(index - 1 + MEMBERS.length) % MEMBERS.length]!;
  const next = MEMBERS[(index + 1) % MEMBERS.length]!;
  return { prev, next };
}
