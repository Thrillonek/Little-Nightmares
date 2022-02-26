module.exports = {
  name: 'ln',
  description: 'Info o postavách z Little Nightmares',
  options: [
    {
      name: 'postava',
      description: 'Charakter, o kterém chcete nějaké info vědět,',
      type: "STRING",
      required: true,
      choices: [
        { name: "Nomes", value: "0" },
        { name: "Six", value: "1" },
        { name: "Mono", value: "2" },
        { name: "Leeches", value: "3" },
        { name: "Janitor", value: "4" },
        { name: "Twin Chefs", value: "5" },
        { name: "Guests", value: "6" },
        { name: "Lady", value: "7" },
        { name: "Hunter", value: "8" },
        { name: "Teacher", value: "9" },
        { name: "Bullies", value: "10" },
        { name: "Doctor", value: "11" },
        { name: "Patients", value: "12"}, 
        { name: "Viewers", value: "13"},
        { name: "Thin Man", value: "14" },
        { name: "Monster Six", value: "15" },
        { name: "Shadow Six", value: "16" },
        { name: "Shoe Monster", value: "17" },
        { name: "Flesh Walls (Signal Tower)", value: "18" },
      ]
    }
  ],
  execute(int, args, client, discord){

    const arg = (x) => args.get("postava", true).value === x;
    const reply = (x) => int.followUp({ embeds: [x] });

    const nome = new discord.MessageEmbed()
    .setTitle('**Nomes**')
    .setColor('#632700')
    .setDescription('Jsou malá skeptická stvoření, obývající celé The Maw. Zatímco vystrašení, někteří se snaží spřátelit s cizími lidmi, avšak ti co tohle riziko podstoupí málokdy přežijí. jejich konický tvar a malý vzrůst jim umožňuje dostat se do míst, kam ostatní nemůžou. Na první pohled prázdné schránky. Jejich stíny však ukazují mnohé...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876170986964258846/354.png?width=159&height=405');

    const six = new discord.MessageEmbed()
    .setTitle('**Six**')
    .setColor('YELLOW')
    .setDescription('Je hlavní protagonistka prvního dílu herní série Little Nightmares. Six je chytrá a vytrvalá devítiletá dívka, jejíž hlavním motivem je žlutá pláštěnka. V celém vesmíru Little Nightmares se Six snaží přežít ve světě plném krutých a nelidských příšer, které se ji snaží jakkoliv zničit. Každopádně její temnou stránku znát nechcete, to mi věřte...')
    .setThumbnail('https://cdn.discordapp.com/attachments/841583390808473634/876070603738718228/Six.png')

    const mono = new discord.MessageEmbed()
    .setTitle('**Mono**')
    .setColor('#632700')
    .setDescription('Je hlavním protagonistou Little Nightmares II. Mono byl původně laskavý a ochotný chlapec, který projevoval soucit s ostatními. To vše se ale změnilo, když doprovázel dívku jménem Six na cestě do Signální Věže - ta s ním udělala své... Monovy schopnosti jakýmsi způsobem souvisí s televizním vysílaní a je schopen s televizemi manipulovat. Mono se nakonec vzdá na úplném konci, těsně před dokončením své práce...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517024900210718/574.png?width=230&height=426')

    const leech = new discord.MessageEmbed()
    .setTitle('**Leeches**')
    .setColor('#000000')
    .setDescription('Parazité obývající tu nejspodnější část lodě, nesoucí název The Maw. Tyto krvelačné pijavice zajímá pouze jedno - krev, kterou shodou okolností nosíte ve svém malém, skladném tělíčku. Rychlost není jejich silná stránka, avšak jejich množství je už kapitola jiná...')
    .setThumbnail('https://cdn.discordapp.com/attachments/841583390808473634/876070595631136798/Leech2.png');

    const jani = new discord.MessageEmbed()
    .setTitle('**Janitor**')
    .setColor('#663512')
    .setDescription('Známý taky jako Roger je prvním protivníkem V The Maw, se kterým se Six a jeden z mnoha jednotlivců, kteří jí oponují na její cestě. Slepý domovník s dlouhýma pažema a bledou kůží se snaží udržovat spodní část lodě, do toho chytat uprchlé děti, zamykat je do klecí, likvidovat a balit je do pytlů. Jeho život je pak velmi rychle ukončen odseknutím jeho paží...')
    .setThumbnail('https://cdn.discordapp.com/attachments/841583390808473634/876070575875960892/The_Janitor.png');

    const chefs = new discord.MessageEmbed()
    .setTitle('Twin Chefs')
    .setColor('#999999')
    .setDescription('Párek surovců, jež jsou druhými antagonisty první hry. Ve své kuchyni tito dva obtloustlí a opuchlí šášové připravují jídlo pro nenažrané hosty tohoto místa. Jejich masité pupky zdobí zástěry, mezitím co na obličejích nosí masky. Pod rouškou kuchyňské vůně vařících se dětí bude muset Six oběma utéct za pomocí různých kuchyňských nástrojů...')
    .setThumbnail('https://cdn.discordapp.com/attachments/841583390808473634/876070593433309204/Twin_Chefs.png');

    const guests = new discord.MessageEmbed()
    .setTitle('**Guests**')
    .setColor('#663512')
    .setDescription('Nenažraná, obtloustlá prasata, která svým vzhledem spíše představují zvěř a svým způsobem je tak s nimi i zacházeno. Mocná dáma dohlíží na jejich apetit, který tvoří převážně maso a zase maso, Six nevyjímaje. Jejich návštěva se zdá být i ta poslední, což si uvědomí v moment, kdy se nad jejich hlavami ocitne sekáček na maso, či bílá maska. Kanibalismus je na denním pořádku, ale jediné na čem záleží je, aby koloběh běžel dál...')
    .setThumbnail('https://cdn.discordapp.com/attachments/841583390808473634/876070644129861652/TheGuests.png');

    const lady = new discord.MessageEmbed()
    .setTitle('**Lady**')
    .setColor('#ffffff')
    .setDescription('Mocný císař vládnoucí celému komplexu lodě. Jako taková dohlíží, aby měli hosté stále co jíst, každopádně je fixovaná pouze na sebe a na svou moc. Její nadpřirozené schopnosti potřebují energii - živou energii, energii, kterou je možno získat pouze z živých bytostí. Její nehynoucí krása musí růst, The Maw musí fungovat, hosté musí jíst. Její narcismus nakonec poleví, když ji Six vezme její život zrcadlem, které je jako jedno z mála nerozbité...')
    .setThumbnail('https://cdn.discordapp.com/attachments/841583390808473634/876070577960529960/The-Lady-3.png');

    const hunt = new discord.MessageEmbed()
    .setTitle('**Hunter**')
    .setColor('#FFF2B4')
    .setDescription('Je osamocený lovec, číhající za stromy se svým děravým pytlem, bekovkou, zeleným potrhaným kabátem, černými botami a perkusní brokovnicí, čekající na všemožné narušitele, jenž se pokusí do lesa vstoupit, či z něho odejít. Své záliby však nenašel pouze v lovením, ale i v oboru chirurgickém. Rozhodl se doslova složit dohromady, stejně jako svou jedinou rodinu, která jaksi není moc do řeči...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517101366550558/500.png?width=305&height=427')

    const teach = new discord.MessageEmbed()
    .setTitle('**Teacher**')
    .setColor('#7C746C')
    .setDescription('Učitelka schopná vyhledat a najít každého výtržníka v každé lavici. Její nepřetržitý úsměv vás přesvědčí o tom, že v hodině se nemluví - proto je její třída vždy plná dobře vychovaných žáků. Tato sadistická ženština, posedlá učit, umí natahovat svůj krk do opravdu velkých rozměrů a nemá žádný problém... No... Jak to říct... Za špatné chování vám nenapíše poznámku, ale dá vám ponaučení moc dobré...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517157087903814/500.png?width=305&height=427')

    const bully = new discord.MessageEmbed()
    .setTitle('**Bullies**')
    .setColor('#4F4636')
    .setDescription('Jsou živé porcelánové panenky, které rádi šikanují sebe navzájem nebo nežádané hosty. Jedná se o živoucí důkaz, že děti nemusí být vždy nevinné a křehké. Bez domova, minulosti, rodičů, se tyto „děti“ učí. Pokud budou vyrušovat, jejich učitelka si je už srovná po svém...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517563998302219/254.png')

    const doc = new discord.MessageEmbed()
    .setTitle('**Doctor**')
    .setColor('#856250')
    .setDescription('Podivín, žijící ve své zaplivané ordinaci, provádějící své odporné experimenty na lidech, které se lidské moralitě ani zdánlivě nepřibližují, trnouce o život svých pacientů, doufaje v jejich život a s opuchlým obličejem vyrábějíce masky pro lidi s jistou deformací hlavy. Jeho housenkovité tělo se pohybuje po většinu času vzhůru nohama a na své výtvory se dívá pěkně se shora. Netoleruje žádné devianty v podobě malých dětí, jenž nejsou dopředu objednané...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517689265369148/500.png?width=305&height=427')

    const patient = new discord.MessageEmbed()
    .setTitle('**Patients**')
    .setColor('#856250')
    .setDescription('Jsou špinavé figuríny, ukrývající části lidského hnijícího masa. Někteří lidé se dostanou do etapy života, kdy touží po změně a rozhodnou se, že nemůžou jinak dál. Proto tito lidé navštěvují nemocnici, kde jsou přetvořeni a kompletně přetvořeni do něčeho nového a méně nudného... Ale nevím, jestli je tohle zrovna ta změna, po které toužili. Ačkoliv prázdné, tak stále velmi živé a života-vědomé bytosti, jejíž vzpomínky na operaci jsou ještě horší než světlo, které bylo to poslední co po operaci viděly...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517646143746090/500.png?width=305&height=427')

    const view = new discord.MessageEmbed()
    .setTitle('**Viewers**')
    .setColor('#567080')
    .setDescription('Jsou obyčejní občané města s obyčejnými životy a obyčejnými zálibami. Všichni jsou kompletně uchváceni televizemi, které jim, jako jediné, poskytují smysl života. Avšak televize nejsou zrovna bezpečná věc, soudě podle jejich zdeformovaných obličejů, koukající se přímo do zářících obrazovek. Pokud je vysílání přerušeno, zažnou být velice agresivní a né zrovna přátelští, neboť si za žádných okolností nepřejí být vyrušeni...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517723897729174/370.png?width=305&height=427')

    const thin = new discord.MessageEmbed()
    .setTitle('**Thin Man**')
    .setColor('#262856')
    .setDescription('Je hubený vysílatel, uvězněný ve své věži. Vysílá a pomocí svých schopností, jako je teleportace skrz televize nebo ohýbání signálu, chytá dětská stvoření, vězněná v tomto světě a zanechává po nich pouze zavádějící echa. Jak všudypřítomné hukot přenosu tlumí vlny, Tenký muž pokračuje ve své nekonečné cestě tímto pustým místem, pronásleduje stíny a něco hledá. Hledá a hledá. Hledá sám sebe - sám sebe najde, sám sebe zničí a hlavně sám sebe nahradí...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876517867594600548/vp8okjo09ek61.png?width=514&height=427')

    const monster = new discord.MessageEmbed()
    .setTitle('**Monster Six**')
    .setColor('#ffff00')
    .setDescription('*Tento příkaz je zatím v progresu*')

    const shadow = new discord.MessageEmbed()
    .setTitle('**Shadow Six**')
    .setColor('#2C254D')
    .setDescription('Skutečnost, která objeví, když Six konzumuje jídlo nebo zabíjí, přičemž zanechává dojem, že ona nebo ono je projevem nějaké temnoty nebo zla souvisejícího se Six. Nic víc, nic míň...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876171032984170566/399.png?width=270&height=405')

    const shoe = new discord.MessageEmbed()
    .setTitle('**Shoe Monster**')
    .setColor('#333333')
    .setDescription('Je vedlejším protivníkem, nacházející se pod hromadou bot, pravděpodobně jejich majitelé už zesnuli. Číhá v rohu na své oběti, nicméně jeho nebo její záměry, vzhed, či úděl jsou neznámy...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876171011555479552/709.png?width=469&height=406')

    const flesh = new discord.MessageEmbed()
    .setTitle('**Flesh Walls**')
    .setColor('#7f3900')
    .setDescription('Je odporné a hnusné stvoření, tvořené pouze z hromady masa a obrovských očí. Tento zjev tvoří signální věž a pohlcuje celé město, hroutící se do velké záhuby. Samo celému městu vládne a parazituje na všem co má schopnost přemýšlet. Je schopno vytvořit svou vlastní dimenzi, ve které nefunguji zákony, tak, jak je známe, ale o něco více komplexněji. Roste a bere. Popravdě se nejedná zrovna o jednu z těch hezčích věcí, kterou ve hře uvidíme...')
    .setThumbnail('https://media.discordapp.net/attachments/841583390808473634/876518091331350528/flesh5.png?width=465&height=427')

    if(arg("0")){
      reply(nome);
    } else if(arg("1")){
      reply(six)
    } else if(arg("2")){
      reply(mono)
    } else if(arg("3")){
      reply(leech)
    } else if(arg("4")){
      reply(jani)
    } else if(arg("5")){
      reply(chefs)
    } else if(arg("6")){
      reply(guests)
    } else if(arg("7")){
      reply(lady)
    } else if(arg("8")){
      reply(hunt)
    } else if(arg("9")){
      reply(teach)
    } else if(arg("10")){
      reply(bully)
    } else if(arg("11")){
      reply(doc)
    } else if(arg("12")){
      reply(patient)
    } else if(arg("13")){
      reply(view)
    } else if(arg("14")){
      reply(thin)
    } else if(arg("15")){
      reply(monster)
    } else if(arg("16")){
      reply(shadow)
    } else if(arg("17")){
      reply(shoe)
    } else if(arg("18")){
      reply(flesh)
    }
  }
}