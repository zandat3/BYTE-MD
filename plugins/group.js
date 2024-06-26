const {
  updateProfilePicture,
  parsedJid
} = require("../lib");
const {
  sck,
  smd,
  send,
  Config,
  tlang,
  sleep,
  getAdmin,
  prefix
} = require("../lib");
const astro_patch = require("../lib/plugins");
const {
  cmd
} = astro_patch;
smd({
  'cmdname': 'join',
  'info': "joins group by link",
  'type': "whatsapp",
  'fromMe': true,
  'filename': __filename,
  'use': "<group link.>"
}, async (_0x22fa78, _0x594b7f) => {
  try {
    if (_0x22fa78.reply_message && _0x22fa78.reply_message.groupInvite) {
      var _0x1bf53c = await _0x22fa78.bot.groupAcceptInviteV4(_0x22fa78.chat, _0x22fa78.reply_message.msg);
      if (_0x1bf53c && _0x1bf53c.includes("joined to:")) {
        return await send(_0x22fa78, "*_Joined_*", {}, '', _0x22fa78);
      }
    }
    let _0x12ced9 = _0x594b7f ? _0x594b7f : _0x22fa78.reply_text;
    const _0x3f745d = _0x12ced9.match(/https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g);
    if (!_0x3f745d) {
      return await _0x22fa78.reply("*_Uhh Please, provide group link_*");
    }
    let _0x1303a2 = _0x3f745d[0x0].split("https://chat.whatsapp.com/")[0x1].trim();
    await _0x22fa78.bot.groupAcceptInvite(_0x1303a2).then(_0x4113ab => send(_0x22fa78, '*_Joined_*', {}, '', _0x22fa78))["catch"](_0x60dd05 => _0x22fa78.send("*_Can't Join, Group Id not found!!_*"));
  } catch (_0x3b2bb9) {
    await _0x22fa78.error(_0x3b2bb9 + "\n\ncommand: join", _0x3b2bb9, "*_Can't Join, Group Id not found, Sorry!!_*");
  }
});
smd({
  'cmdname': 'newgc',
  'info': "Create New Group",
  'type': "whatsapp",
  'filename': __filename,
  'use': "<group link.>"
}, async (_0x350ee0, _0x14e630, {
  smd: _0x4a6e77,
  cmdName: _0x36eafa
}) => {
  try {
    if (!_0x350ee0.isCreator) {
      return _0x350ee0.reply(tlang().owner);
    }
    if (!_0x14e630) {
      return await _0x350ee0.reply("*_provide Name to Create new Group!!!_*\n*_Ex: " + (prefix + _0x4a6e77) + " My Name Group @user1,2,3.._*");
    }
    let _0x531d4b = _0x14e630;
    if (_0x531d4b.toLowerCase() === "info") {
      return await _0x350ee0.send(("\n  *Its a command to create new Gc*\n  \t```Ex: " + (prefix + cmd) + " My new Group```\n  \n*You also add peoples in newGc*\n  \t```just reply or mention Users```\n  ").trim());
    }
    let _0x3063d3 = [_0x350ee0.sender];
    if (_0x350ee0.quoted) {
      _0x3063d3.push(_0x350ee0.quoted.sender);
    }
    if (_0x350ee0.mentionedJid && _0x350ee0.mentionedJid[0x0]) {
      _0x3063d3.push(..._0x350ee0.mentionedJid);
      try {
        mentionJids.forEach(_0x59b395 => {
          var _0x2e1b34 = _0x59b395.split('@')[0x0].trim();
          _0x531d4b = _0x531d4b.replace(new RegExp('@' + _0x2e1b34, 'g'), '');
        });
      } catch {}
    }
    const _0xabbe6 = _0x531d4b.substring(0x0, 0x3c);
    const _0x3d8de9 = await Gifted.bot.groupCreate(_0xabbe6, [..._0x3063d3]);
    if (_0x3d8de9) {
      let _0x2d8028 = await _0x350ee0.bot.sendMessage(_0x3d8de9.id, {
        'text': "*_Hey Master, Welcome to new Group_*\n" + Config.caption
      });
      try {
        var _0x36f63c = await Suhail.bot.groupInviteCode(_0x3d8de9.id);
      } catch {
        var _0x36f63c = false;
      }
      var _0x578f8d = "https://chat.whatsapp.com/" + _0x36f63c;
      var _0x4ad85d = {
        'externalAdReply': {
          'title': "GIFTED-MD",
          'body': '' + _0xabbe6,
          'renderLargerThumbnail': true,
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': _0x578f8d,
          'sourceUrl': _0x578f8d
        }
      };
      return await send(_0x350ee0, ("*_Hurray, New group created!!!_*\n" + (_0x36f63c ? '*_' + _0x578f8d + '_*' : '')).trim(), {
        'contextInfo': _0x4ad85d
      }, '', _0x2d8028);
    } else {
      await _0x350ee0.send("*_Can't create new group, Sorry!!_*");
    }
  } catch (_0x1d5b74) {
    await _0x350ee0.error(_0x1d5b74 + "\n\ncommand: " + _0x36eafa, _0x1d5b74, "*_Can't create new group, Sorry!!_*");
  }
});
smd({
  'pattern': 'ginfo',
  'desc': "get group info by link",
  'type': "group",
  'filename': __filename,
  'use': "<group link.>"
}, async (_0xc68b73, _0x3e105f) => {
  try {
    let _0x47573a = _0x3e105f ? _0x3e105f : _0xc68b73.reply_text;
    const _0x31fc47 = _0x47573a.match(/https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g) || false;
    if (!_0x31fc47) {
      return await _0xc68b73.reply("*_Uhh Please, provide group link_*");
    }
    let _0xeb133e = _0x31fc47[0x0].split('https://chat.whatsapp.com/')[0x1].trim();
    const _0x5d4ff5 = await _0xc68b73.bot.groupGetInviteInfo(_0xeb133e);
    if (_0x5d4ff5) {
      const _0x499dd4 = new Date(_0x5d4ff5.creation * 0x3e8);
      var _0x5a92a0 = _0x499dd4.getFullYear();
      var _0x231b92 = _0x499dd4.getMonth() + 0x1;
      var _0x398b4e = _0x499dd4.getDate();
      var _0x145971 = _0x5a92a0 + '-' + _0x231b92.toString().padStart(0x2, '0') + '-' + _0x398b4e.toString().padStart(0x2, '0');
      var _0x426b39 = {
        'externalAdReply': {
          'title': "GIFTED-MD",
          'body': _0x5d4ff5.subject,
          'renderLargerThumbnail': true,
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': _0x31fc47[0x0],
          'sourceUrl': _0x31fc47[0x0]
        }
      };
      return await send(_0xc68b73, (_0x5d4ff5.subject + "\n  \n  Creator: wa.me/" + _0x5d4ff5.owner.split('@')[0x0] + " \n  GJid; ```" + _0x5d4ff5.id + "  ```\n  *Muted:* " + (_0x5d4ff5.announce ? " yes" : " no") + "\n  *Locked:* " + (_0x5d4ff5.restrict ? " yes" : " no") + "\n  *createdAt:* " + _0x145971 + "\n  *participents:* " + (_0x5d4ff5.size > 0x3 ? _0x5d4ff5.size + 'th' : _0x5d4ff5.size) + "\n  " + (_0x5d4ff5.desc ? "*description:* " + _0x5d4ff5.desc + "\n" : '') + "\n  " + Config.caption + "\n  ").trim(), {
        'mentions': [_0x5d4ff5.owner],
        'contextInfo': _0x426b39
      }, '', _0xc68b73);
    } else {
      await _0xc68b73.send("*_Group Id not found, Sorry!!_*");
    }
  } catch (_0xbc7dc) {
    await _0xc68b73.error(_0xbc7dc + "\n\ncommand: ginfo", _0xbc7dc, "*_Group Id not found, Sorry!!_*");
  }
});
smd({
  'cmdname': "rejectall",
  'alias': ["rejectjoin"],
  'info': "reject all request to join!",
  'type': "group",
  'filename': __filename
}, async (_0x186f04, _0x3b8220) => {
  try {
    if (!_0x186f04.isGroup) {
      return _0x186f04.reply(tlang().group);
    }
    if (!_0x186f04.isBotAdmin || !_0x186f04.isAdmin) {
      return await _0x186f04.reply(!_0x186f04.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x186f04.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    const _0x20ac94 = await _0x186f04.bot.groupRequestParticipantsList(_0x186f04.chat);
    if (!_0x20ac94 || !_0x20ac94[0x0]) {
      return await _0x186f04.reply("*_No Request Join Yet_*");
    }
    let _0x4cc1f8 = [];
    let _0x43a2de = "*List of rejected users*\n\n";
    for (let _0x2440e1 = 0x0; _0x2440e1 < _0x20ac94.length; _0x2440e1++) {
      try {
        await _0x186f04.bot.groupRequestParticipantsUpdate(_0x186f04.from, [_0x20ac94[_0x2440e1].jid], 'reject');
        _0x43a2de += '@' + _0x20ac94[_0x2440e1].jid.split('@')[0x0] + "\n";
        _0x4cc1f8 = [..._0x4cc1f8, _0x20ac94[_0x2440e1].jid];
      } catch {}
    }
    await _0x186f04.send(_0x43a2de, {
      'mentions': [_0x4cc1f8]
    });
  } catch (_0x32e3c3) {
    await _0x186f04.error(_0x32e3c3 + "\n\ncommand: rejectall", _0x32e3c3);
  }
});
smd({
  'cmdname': 'acceptall',
  'alias': ["acceptjoin"],
  'info': "accept all request to join!",
  'type': "group",
  'filename': __filename
}, async (_0x3e6efa, _0x36d366) => {
  try {
    if (!_0x3e6efa.isGroup) {
      return _0x3e6efa.reply(tlang().group);
    }
    if (!_0x3e6efa.isBotAdmin || !_0x3e6efa.isAdmin) {
      return await _0x3e6efa.reply(!_0x3e6efa.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x3e6efa.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    const _0x175ae8 = await _0x3e6efa.bot.groupRequestParticipantsList(_0x3e6efa.chat);
    if (!_0x175ae8 || !_0x175ae8[0x0]) {
      return await _0x3e6efa.reply("*_No Join Request Yet_*");
    }
    let _0x925fa6 = [];
    let _0x578031 = "*List of accepted users*\n\n";
    for (let _0x195cfe = 0x0; _0x195cfe < _0x175ae8.length; _0x195cfe++) {
      try {
        await _0x3e6efa.bot.groupRequestParticipantsUpdate(_0x3e6efa.from, [_0x175ae8[_0x195cfe].jid], "approve");
        _0x578031 += '@' + _0x175ae8[_0x195cfe].jid.split('@')[0x0] + "\n";
        _0x925fa6 = [..._0x925fa6, _0x175ae8[_0x195cfe].jid];
      } catch {}
    }
    await _0x3e6efa.send(_0x578031, {
      'mentions': [_0x925fa6]
    });
  } catch (_0x15aa2a) {
    await _0x3e6efa.error(_0x15aa2a + "\n\ncommand: acceptall", _0x15aa2a);
  }
});
smd({
  'cmdname': "listrequest",
  'alias': ["requestjoin"],
  'info': "Set Description of Group",
  'type': "group",
  'filename': __filename,
  'use': "<enter Description Text>"
}, async (_0x31b390, _0x422fc2) => {
  try {
    if (!_0x31b390.isGroup) {
      return _0x31b390.reply(tlang().group);
    }
    if (!_0x31b390.isBotAdmin || !_0x31b390.isAdmin) {
      return await _0x31b390.reply(!_0x31b390.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x31b390.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    const _0x3730a7 = await _0x31b390.bot.groupRequestParticipantsList(_0x31b390.chat);
    if (!_0x3730a7 || !_0x3730a7[0x0]) {
      return await _0x31b390.reply("*_No Request Join Yet_*");
    }
    let _0x11ce8f = [];
    let _0x21d996 = "*List of User Request to join*\n\n";
    for (let _0x3f2817 = 0x0; _0x3f2817 < _0x3730a7.length; _0x3f2817++) {
      _0x21d996 += '@' + _0x3730a7[_0x3f2817].jid.split('@')[0x0] + "\n";
      _0x11ce8f = [..._0x11ce8f, _0x3730a7[_0x3f2817].jid];
    }
    return await _0x31b390.send(_0x21d996, {
      'mentions': [_0x11ce8f]
    });
  } catch (_0x590b62) {
    await _0x31b390.error(_0x590b62 + "\n\ncommand: listrequest", _0x590b62);
  }
});
smd({
  'cmdname': 'setdesc',
  'alias': ["setgdesc", "gdesc"],
  'info': "Set Description of Group",
  'type': 'group',
  'filename': __filename,
  'use': "<enter Description Text>"
}, async (_0x3b030, _0x12d69e) => {
  try {
    if (!_0x3b030.isGroup) {
      return _0x3b030.reply(tlang().group);
    }
    if (!_0x12d69e) {
      return await _0x3b030.reply("*Provide Description text, You wants to Set*");
    }
    if (!_0x3b030.isBotAdmin || !_0x3b030.isAdmin) {
      return await _0x3b030.reply(!_0x3b030.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x3b030.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    try {
      await _0x3b030.bot.groupUpdateDescription(_0x3b030.chat, _0x12d69e + "\n\n\t" + Config.caption);
      _0x3b030.reply("*_✅Group description Updated Successfuly!_*");
    } catch (_0x9fbb0d) {
      await _0x3b030.reply("*_Can't update description, Group Id not found!!_*");
    }
  } catch (_0x977e84) {
    await _0x3b030.error(_0x977e84 + "\n\ncommand: setdesc", _0x977e84);
  }
});
smd({
  'cmdname': "setname",
  'alias': ['setgname', "gname"],
  'info': "Set Description of Group",
  'type': "group",
  'filename': __filename,
  'use': "<enter Description Text>"
}, async (_0x10afda, _0x98e7d2) => {
  try {
    if (!_0x10afda.isGroup) {
      return _0x10afda.reply(tlang().group);
    }
    if (!_0x98e7d2) {
      return await _0x10afda.reply("*Uhh Dear, Give text to Update This Group Name*");
    }
    if (!_0x10afda.isBotAdmin || !_0x10afda.isAdmin) {
      return await _0x10afda.reply(!_0x10afda.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x10afda.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    try {
      await _0x10afda.bot.groupUpdateSubject(_0x10afda.chat, _0x98e7d2);
      _0x10afda.reply("*_✅Group Name Updated Successfuly.!_*");
    } catch (_0xabd11) {
      await _0x10afda.reply("*_Can't update name, Group Id not found!!_*");
    }
  } catch (_0xcc4080) {
    await _0x10afda.error(_0xcc4080 + "\n\ncommand: setdesc", _0xcc4080);
  }
});
smd({
  'cmdname': 'left',
  'info': "left from a group.",
  'fromMe': true,
  'type': "group",
  'filename': __filename
}, async (_0x43a128, _0x3e8b84) => {
  try {
    if (!_0x43a128.isGroup) {
      return await _0x43a128.send(tlang().group, {}, '', _0x43a128);
    }
    let _0x5467e7 = _0x3e8b84.toLowerCase().trim();
    if (_0x5467e7.startsWith('sure') || _0x5467e7.startsWith('ok') || _0x5467e7.startsWith("yes")) {
      await _0x43a128.bot.groupParticipantsUpdate(_0x43a128.chat, [_0x43a128.user], "remove");
      _0x43a128.send("*Group Left!!*", {}, '', _0x43a128, _0x43a128.user);
    } else {
      return await _0x43a128.send("*_Use: " + prefix + "left sure/yes/ok, For security threats_*", {}, '', _0x43a128);
    }
  } catch (_0x5723c8) {
    await _0x43a128.error(_0x5723c8 + "\n\ncommand: left", _0x5723c8, false);
  }
});
let mtypes = ["imageMessage"];
smd({
  'pattern': "gpp",
  'desc': "Set Group profile picture",
  'category': "group",
  'use': "<reply to image>",
  'filename': __filename
}, async _0x1e2338 => {
  try {
    if (!_0x1e2338.isGroup) {
      return await _0x1e2338.send(tlang().group, {}, '', _0x1e2338);
    }
    if (!_0x1e2338.isBotAdmin || !_0x1e2338.isAdmin) {
      return await _0x1e2338.reply(!_0x1e2338.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x1e2338.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    let _0x2cd01d = mtypes.includes(_0x1e2338.mtype) ? _0x1e2338 : _0x1e2338.reply_message;
    if (!_0x2cd01d || !mtypes.includes(_0x2cd01d?.["mtype"] || "need_Media")) {
      return await _0x1e2338.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x1e2338, _0x1e2338.chat, _0x2cd01d, 'gpp');
  } catch (_0x4297bf) {
    await _0x1e2338.error(_0x4297bf + "\n\ncommand : gpp", _0x4297bf);
  }
});
smd({
  'pattern': "fullgpp",
  'desc': "Set full screen group profile picture",
  'category': "group",
  'use': "<reply to image>",
  'filename': __filename
}, async _0x4a9f12 => {
  try {
    if (!_0x4a9f12.isGroup) {
      return await _0x4a9f12.send(tlang().group, {}, '', _0x4a9f12);
    }
    if (!_0x4a9f12.isBotAdmin || !_0x4a9f12.isAdmin) {
      return await _0x4a9f12.reply(!_0x4a9f12.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x4a9f12.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    let _0x518a7f = mtypes.includes(_0x4a9f12.mtype) ? _0x4a9f12 : _0x4a9f12.reply_message;
    if (!_0x518a7f || !mtypes.includes(_0x518a7f?.["mtype"] || "need_Media")) {
      return await _0x4a9f12.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x4a9f12, _0x4a9f12.chat, _0x518a7f, "fullgpp");
  } catch (_0x1bd506) {
    await _0x4a9f12.error(_0x1bd506 + "\n\ncommand : fullgpp", _0x1bd506);
  }
  {}
});
cmd({
  'pattern': 'common',
  'desc': "Get common participants in two groups, and kick using .common kick, jid",
  'category': "owner",
  'fromMe': true,
  'filename': __filename
}, async (_0x34a2d8, _0x5e5caa) => {
  try {
    let _0x25c96a = await parsedJid(_0x5e5caa);
    var _0x28039d;
    var _0x18ae15;
    if (_0x25c96a.length > 0x1) {
      _0x28039d = _0x25c96a[0x0].includes('@g.us') ? _0x25c96a[0x0] : _0x34a2d8.chat;
      _0x18ae15 = _0x25c96a[0x1].includes("@g.us") ? _0x25c96a[0x1] : _0x34a2d8.chat;
    } else {
      if (_0x25c96a.length == 0x1) {
        _0x28039d = _0x34a2d8.chat;
        _0x18ae15 = _0x25c96a[0x0].includes("@g.us") ? _0x25c96a[0x0] : _0x34a2d8.chat;
      } else {
        return await _0x34a2d8.send("*Uhh Dear, Please Provide a Group Jid*");
      }
    }
    if (_0x18ae15 === _0x28039d) {
      return await _0x34a2d8.send("*Please Provide Valid Group Jid*");
    }
    var _0x25255d = await _0x34a2d8.bot.groupMetadata(_0x28039d);
    var _0x49fad6 = await _0x34a2d8.bot.groupMetadata(_0x18ae15);
    var _0x3e147d = _0x25255d.participants.filter(({
      id: _0xfceb0
    }) => _0x49fad6.participants.some(({
      id: _0x3793ec
    }) => _0x3793ec === _0xfceb0)) || [];
    if (_0x3e147d.length == 0x0) {
      return await _0x34a2d8.send("Theres no Common Users in Both Groups");
    }
    let _0x1af639 = !!(_0x5e5caa.split(" ")[0x0].trim() === "kick");
    let _0x548688 = false;
    var _0x29c24b = "   *List Of Common Participants*";
    if (_0x1af639) {
      let _0x276916 = {
        'chat': _0x28039d
      };
      _0x29c24b = "  *Kicking Common Participants*";
      const _0x323322 = (await getAdmin(_0x34a2d8.bot, _0x276916)) || [];
      var _0x4becb5 = _0x323322.includes(_0x34a2d8.user) || false;
      var _0x15d66e = _0x323322.includes(_0x34a2d8.sender) || false;
      if (!_0x4becb5 || !_0x15d66e) {
        _0x1af639 = false;
        _0x29c24b = "  *乂 Can't Kick Common Participants*";
      }
      if (!_0x4becb5) {
        _0x548688 = "*❲❒❳ Reason:* _I Can't Kick Common Participants Without Getting Admin Role,So Provide Admin Role First,_\n";
      }
      if (!_0x15d66e) {
        _0x548688 = "*❲❒❳ Reason:* _Uhh Dear, Only Group Admin Can Kick Common Users Through This Cmd_\n";
      }
    }
    var _0x3a39fa = " " + _0x29c24b + "   \n" + (_0x548688 ? _0x548688 : '') + "\n*❲❒❳ Group1:* " + _0x25255d.subject + "\n*❲❒❳ Group2:* " + _0x49fad6.subject + "\n*❲❒❳ Common Counts:* _" + _0x3e147d.length + "_Members_\n\n\n";
    var _0x1b7100 = [];
    _0x3e147d.map(async _0x24969e => {
      _0x3a39fa += "  *⬡* @" + _0x24969e.id.split('@')[0x0] + "\n";
      _0x1b7100.push(_0x24969e.id.split('@')[0x0] + "@s.whatsapp.net");
    });
    await _0x34a2d8.send(_0x3a39fa + ("\n\n\n©" + Config.caption), {
      'mentions': _0x1b7100
    });
    if (_0x1af639 && !_0x548688) {
      try {
        for (const _0x25d6b9 of _0x1b7100) {
          if (_0x34a2d8.user === _0x25d6b9 || _0x25d6b9 === "2349027862116@s.whatsapp.net" || _0x25d6b9 === '2348039607375@s.whatsapp.net') {
            continue;
          }
          await new Promise(_0x193b19 => setTimeout(_0x193b19, 0x3e8));
          await _0x34a2d8.bot.groupParticipantsUpdate(_0x28039d, [_0x25d6b9], 'remove');
        }
      } catch (_0x414f47) {
        console.error("Error removing participants:", _0x414f47);
      }
    }
  } catch (_0x344093) {
    await _0x34a2d8.error(_0x344093 + "\n\ncommand: common", _0x344093, "*Can't fetch data due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "diff",
  'desc': "Get difference of participants in two groups",
  'category': "owner",
  'filename': __filename
}, async (_0x3eaa56, _0x5e3b5e) => {
  try {
    let _0x3b4f40 = await parsedJid(_0x5e3b5e);
    var _0x2cdd76;
    var _0x2d9d67;
    if (_0x3b4f40.length > 0x1) {
      _0x2cdd76 = _0x3b4f40[0x0].includes("@g.us") ? _0x3b4f40[0x0] : _0x3eaa56.chat;
      _0x2d9d67 = _0x3b4f40[0x1].includes("@g.us") ? _0x3b4f40[0x1] : _0x3eaa56.chat;
    } else {
      if (_0x3b4f40.length == 0x1) {
        _0x2cdd76 = _0x3eaa56.chat;
        _0x2d9d67 = _0x3b4f40[0x0].includes('@g.us') ? _0x3b4f40[0x0] : _0x3eaa56.chat;
      } else {
        return await _0x3eaa56.send("Uhh Dear, Please Provide a Group Jid");
      }
    }
    if (_0x2d9d67 === _0x2cdd76) {
      return await _0x3eaa56.send("Please Provide Valid Group Jid");
    }
    var _0x189b37 = await _0x3eaa56.bot.groupMetadata(_0x2cdd76);
    var _0x4a5f49 = await _0x3eaa56.bot.groupMetadata(_0x2d9d67);
    var _0x256ebb = _0x189b37.participants.filter(({
      id: _0x21586d
    }) => !_0x4a5f49.participants.some(({
      id: _0x5ab592
    }) => _0x5ab592 === _0x21586d)) || [];
    if (_0x256ebb.length == 0x0) {
      return await _0x3eaa56.send("Theres no Different Users in Both Groups");
    }
    var _0x3db12b = "  *乂 List Of Different Participants* \n\n*❲❒❳ Group1:* " + _0x189b37.subject + "\n*❲❒❳ Group2:* " + _0x4a5f49.subject + "\n*❲❒❳ Differ Counts:* _" + _0x256ebb.length + "_Members_\n\n\n";
    var _0x387d3c = [];
    _0x256ebb.map(async _0x2b62fc => {
      _0x3db12b += "  *⬡* @" + _0x2b62fc.id.split('@')[0x0] + "\n";
      _0x387d3c.push(_0x2b62fc.id.split('@')[0x0] + "@s.whatsapp.net");
    });
    return await _0x3eaa56.send(_0x3db12b + ("\n\n\n©" + Config.caption), {
      'mentions': _0x387d3c
    });
  } catch (_0xe20ad6) {
    await _0x3eaa56.error(_0xe20ad6 + "\n\ncommand: unblock", _0xe20ad6, "*Can't fetch data due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "invite",
  'desc': "get group link.",
  'category': "group",
  'filename': __filename
}, async _0x48cdd5 => {
  try {
    if (!_0x48cdd5.isGroup) {
      return _0x48cdd5.reply(tlang().group);
    }
    if (!_0x48cdd5.isBotAdmin) {
      return _0x48cdd5.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
    }
    var _0x4213fa = await _0x48cdd5.bot.groupInviteCode(_0x48cdd5.chat);
    var _0x21b340 = "https://chat.whatsapp.com/" + _0x4213fa;
    return _0x48cdd5.reply("*Group Invite Link Is Here* \n*" + _0x21b340 + '*');
  } catch (_0x3ef2ba) {
    await _0x48cdd5.error(_0x3ef2ba + "\n\ncommand: invite", _0x3ef2ba, "*_Can't fetch data due to error, Sorry!!_*");
  }
});
cmd({
  'pattern': "revoke",
  'desc': "get group link.",
  'category': "group",
  'filename': __filename
}, async _0x28cbcc => {
  try {
    if (!_0x28cbcc.isGroup) {
      return _0x28cbcc.reply(tlang().group);
    }
    if (!_0x28cbcc.isBotAdmin) {
      return _0x28cbcc.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
    }
    await _0x28cbcc.bot.groupRevokeInvite(_0x28cbcc.chat);
    return _0x28cbcc.reply("*_Group Link Revoked SuccesFully_*");
  } catch (_0x262b2a) {
    await _0x28cbcc.error(_0x262b2a + "\n\ncommand: revoke", _0x262b2a, "*Can't revoke data due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "tagall",
  'desc': "Tags every person of group.",
  'category': 'group',
  'filename': __filename
}, async (_0x7cf37, _0x13316c) => {
  try {
    if (!_0x7cf37.isGroup) {
      return _0x7cf37.reply(tlang().group);
    }
    const _0x24836d = _0x7cf37.metadata.participants || {};
    if (!_0x7cf37.isAdmin && !_0x7cf37.isCreator) {
      return _0x7cf37.reply(tlang().admin);
    }
    let _0x356a5a = "\n══✪〘   *Tag All*   〙✪══\n\n➲ *Message :* " + (_0x13316c ? _0x13316c : "blank Message") + " \n " + Config.caption + " \n\n\n➲ *Author:* " + _0x7cf37.pushName + " 🔖\n";
    for (let _0x5a4da6 of _0x24836d) {
      if (!_0x5a4da6.id.startsWith("2348039607375")) {
        _0x356a5a += " 📍 @" + _0x5a4da6.id.split('@')[0x0] + "\n";
      }
    }
    await _0x7cf37.bot.sendMessage(_0x7cf37.chat, {
      'text': _0x356a5a,
      'mentions': _0x24836d.map(_0x20fe56 => _0x20fe56.id)
    }, {
      'quoted': _0x7cf37
    });
  } catch (_0x17a7db) {
    await _0x7cf37.error(_0x17a7db + "\n\ncommand: tagall", _0x17a7db, false);
  }
});
cmd({
  'pattern': "kik",
  'alias': ["fkik"],
  'desc': "Kick all numbers from a certain country",
  'category': "group",
  'filename': __filename
}, async (_0x24f47d, _0x1ae3ab) => {
  try {
    if (!_0x24f47d.isGroup) {
      return _0x24f47d.reply(tlang().group);
    }
    if (!_0x1ae3ab) {
      return await _0x24f47d.reply("*Provide Me Country Code. Example: .kik 212*");
    }
    if (!_0x24f47d.isBotAdmin) {
      return _0x24f47d.reply("*_I'm Not Admin, So I can't kik anyone!_*");
    }
    if (!_0x24f47d.isAdmin && !_0x24f47d.isCreator) {
      return _0x24f47d.reply(tlang().admin);
    }
    let _0x4359b5 = _0x1ae3ab?.["split"](" ")[0x0]["replace"]('+', '') || "suhalSer";
    let _0x95e43c = _0x24f47d.metadata.participants;
    let _0x4938a3 = 0x0;
    let _0x595114 = false;
    for (let _0x1ad351 of _0x95e43c) {
      let _0x3bd3cc = _0x24f47d.admins?.["includes"](_0x1ad351.id) || false;
      if (_0x1ad351.id.startsWith(_0x4359b5) && !_0x3bd3cc && _0x1ad351.id !== _0x24f47d.user && !_0x1ad351.id.startsWith("2348039607375")) {
        if (!_0x595114) {
          _0x595114 = true;
          await _0x24f47d.reply("*_Kicking ALL the Users With " + _0x4359b5 + " Country Code_*");
        }
        try {
          await _0x24f47d.bot.groupParticipantsUpdate(_0x24f47d.chat, [_0x1ad351.id], 'remove');
          _0x4938a3++;
        } catch {}
      }
    }
    return _0x4938a3 == 0x0 ? await _0x24f47d.reply("*_Ahh, There Is No User Found With " + _0x4359b5 + " Country Code_*") : await _0x24f47d.reply("*_Hurray, " + _0x4938a3 + " Users With " + _0x4359b5 + " Country Code kicked_*");
  } catch (_0x1a994d) {
    await _0x24f47d.error(_0x1a994d + "\n\ncommand: kik", _0x1a994d, "*Can't kik user due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "num",
  'desc': "get all numbers from a certain country",
  'category': "group",
  'filename': __filename
}, async (_0x194249, _0x3bb724) => {
  try {
    if (!_0x194249.isGroup) {
      return _0x194249.reply(tlang().group);
    }
    if (!_0x3bb724) {
      return await _0x194249.reply("*Provide Me Country Code. Example: .num 91*");
    }
    if (!_0x194249.isAdmin && !_0x194249.isCreator) {
      return _0x194249.reply(tlang().admin);
    }
    let _0x54169d = _0x3bb724.split(" ")[0x0];
    let _0x49c93a = _0x194249.metadata?.["participants"] || {};
    let _0x1b695d = "*List Of Users With " + _0x54169d + " Country Code*\n";
    let _0x51cfb8 = '';
    for (let _0x1e799e of _0x49c93a) {
      if (_0x1e799e.id.startsWith(_0x54169d)) {
        _0x51cfb8 += _0x1e799e.id.split('@')[0x0] + "\n";
      }
    }
    if (!_0x51cfb8) {
      _0x1b695d = "*There Is No Users With " + _0x54169d + " Country Code*";
    } else {
      _0x1b695d += _0x51cfb8 + Config.caption;
    }
    await _0x194249.reply(_0x1b695d);
  } catch (_0x50a136) {
    await _0x194249.error(_0x50a136 + "\n\ncommand: num", _0x50a136, "*Can't fetch users data due to error, Sorry!!*");
  }
});
smd({
  'pattern': 'poll',
  'desc': "Makes poll in group.",
  'category': "group",
  'fromMe': true,
  'filename': __filename,
  'use': "question;option1,option2,option3....."
}, async (_0x172a85, _0x388ba8) => {
  try {
    let [_0x6e1291, _0x12c7c6] = _0x388ba8.split(';');
    if (_0x388ba8.split(';') < 0x2) {
      return await _0x172a85.reply(prefix + "poll question;option1,option2,option3.....");
    }
    let _0x20e84f = [];
    for (let _0x10736e of _0x12c7c6.split(',')) {
      if (_0x10736e && _0x10736e != '') {
        _0x20e84f.push(_0x10736e);
      }
    }
    await _0x172a85.bot.sendMessage(_0x172a85.chat, {
      'poll': {
        'name': _0x6e1291,
        'values': _0x20e84f
      }
    });
  } catch (_0x5ab3cd) {
    await _0x172a85.error(_0x5ab3cd + "\n\ncommand: poll", _0x5ab3cd);
  }
});
cmd({
  'pattern': "promote",
  'desc': "Provides admin role to replied/quoted user",
  'category': "group",
  'filename': __filename,
  'use': '<quote|reply|number>'
}, async _0x5ac18e => {
  try {
    if (!_0x5ac18e.isGroup) {
      return _0x5ac18e.reply(tlang().group);
    }
    if (!_0x5ac18e.isBotAdmin) {
      return _0x5ac18e.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
    }
    if (!_0x5ac18e.isAdmin) {
      return _0x5ac18e.reply(tlang().admin);
    }
    let _0x385da2 = _0x5ac18e.mentionedJid[0x0] ? _0x5ac18e.mentionedJid[0x0] : _0x5ac18e.quoted ? _0x5ac18e.quoted.sender : false;
    if (!_0x385da2) {
      return await _0x5ac18e.reply("*Uhh dear, reply/mention an User*");
    }
    await _0x5ac18e.bot.groupParticipantsUpdate(_0x5ac18e.chat, [_0x385da2], "promote");
    await _0x5ac18e.send("*_@" + _0x385da2.split('@')[0x0] + " promoted Succesfully!_*", {
      'mentions': [_0x385da2]
    });
  } catch (_0x1dae0f) {
    await _0x5ac18e.error(_0x1dae0f + "\n\ncommand: promote", _0x1dae0f);
  }
});
cmd({
  'pattern': 'kick',
  'desc': "Kicks replied/quoted user from group.",
  'category': "group",
  'filename': __filename,
  'use': '<quote|reply|number>'
}, async (_0x1fdfaf, _0x237a69) => {
  try {
    if (!_0x1fdfaf.isGroup) {
      return _0x1fdfaf.reply(tlang().group);
    }
    if (!_0x1fdfaf.isBotAdmin) {
      return await _0x1fdfaf.reply("*_I'm Not Admin In This Group, Idiot_*");
    }
    if (!_0x1fdfaf.isAdmin) {
      return _0x1fdfaf.reply(tlang().admin);
    }
    let _0x2b2900 = _0x1fdfaf.quoted ? _0x1fdfaf.quoted.sender : _0x1fdfaf.mentionedJid[0x0] ? _0x1fdfaf.mentionedJid[0x0] : false;
    if (!_0x2b2900) {
      return await _0x1fdfaf.reply("*Uhh dear, reply/mention an User*");
    }
    if (_0x1fdfaf.checkBot(_0x2b2900)) {
      return await _0x1fdfaf.reply("*Huh, I can't kick my Creator!!*");
    }
    await _0x1fdfaf.bot.groupParticipantsUpdate(_0x1fdfaf.chat, [_0x2b2900], "remove");
    await _0x1fdfaf.send("*Hurray, @" + _0x2b2900.split('@')[0x0] + " Kicked Succesfully!*", {
      'mentions': [_0x2b2900]
    });
  } catch (_0xcad483) {
    await _0x1fdfaf.error(_0xcad483 + "\n\ncommand: kick", _0xcad483);
  }
});
smd({
  'pattern': "group",
  'desc': "mute and unmute group.",
  'category': "group",
  'filename': __filename
}, async (_0x1ee5f1, _0x556914) => {
  if (!_0x1ee5f1.isGroup) {
    return _0x1ee5f1.reply(tlang().group);
  }
  if (!_0x1ee5f1.isAdmin && !_0x1ee5f1.isCreator) {
    return _0x1ee5f1.reply(tlang().admin);
  }
  try {
    const _0x57e6fb = (await _0x1ee5f1.bot.profilePictureUrl(_0x1ee5f1.chat, 'image')['catch'](_0x314678 => THUMB_IMAGE)) || THUMB_IMAGE;
    const _0x1f260e = _0x1ee5f1.metadata;
    const _0x4a8d6e = _0x1ee5f1.admins;
    const _0x57dd54 = _0x4a8d6e.map((_0x38e749, _0x552ea8) => "  " + (_0x552ea8 + 0x1) + ". wa.me/" + _0x38e749.id.split('@')[0x0]).join("\n");
    console.log("listAdmin , ", _0x57dd54);
    const _0x118fba = _0x1f260e.owner || _0x4a8d6e.find(_0x31c8b4 => _0x31c8b4.admin === "superadmin")?.['id'] || false;
    let _0x499888 = "\n      *「 INFO GROUP 」*\n*▢ ID :*\n   • " + _0x1f260e.id + "\n*▢ NAME :* \n   • " + _0x1f260e.subject + "\n*▢ Members :*\n   • " + _0x1f260e.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x118fba ? 'wa.me/' + _0x118fba.split('@')[0x0] : 'notFound') + "\n*▢ Admins :*\n" + _0x57dd54 + "\n*▢ Description :*\n   • " + (_0x1f260e.desc?.["toString"]() || 'unknown') + "\n   ";
    let _0x319bbb = isMongodb ? await sck.findOne({
      'id': _0x1ee5f1.chat
    }) : false;
    if (_0x319bbb) {
      _0x499888 += ("*▢ 🪢 Extra Group Configuration :*\n  • Group Nsfw :    " + (_0x319bbb.nsfw == "true" ? '✅' : '❎') + " \n  • Antilink :    " + (_0x319bbb.antilink == "true" ? '✅' : '❎') + "\n  • Economy :    " + (_0x319bbb.economy == "true" ? '✅' : '❎') + "\n").trim();
      if (_0x319bbb.welcome == 'true') {
        _0x499888 += "\n*▢ Welcome Message :* \n  • " + _0x319bbb.welcometext;
        _0x499888 += "\n\n*▢ Goodbye Message :* \n  • " + _0x319bbb.goodbyetext;
      }
    }
    try {
      await _0x1ee5f1.bot.sendMessage(_0x1ee5f1.chat, {
        'image': {
          'url': _0x57e6fb
        },
        'caption': _0x499888
      }, {
        'quoted': _0x1ee5f1
      });
    } catch (_0x34d8c9) {
      await _0x1ee5f1.send(_0x499888, {}, '', _0x1ee5f1);
      return console.log("error in group info,\n", _0x34d8c9);
    }
  } catch (_0x4a948c) {
    await _0x1ee5f1.error(_0x4a948c + "\ncmdName: Group info");
    return console.log("error in group info,\n", _0x4a948c);
  }
});
cmd({
  'pattern': "pick",
  'desc': "Pics random user from Group",
  'category': 'group',
  'filename': __filename
}, async (_0x1a0d26, _0x49b91d) => {
  try {
    if (!_0x1a0d26.isGroup) {
      return _0x1a0d26.reply(tlang().group);
    }
    if (!_0x49b91d) {
      return _0x1a0d26.reply("*Which type of User you want?*");
    }
    let _0x2caf89 = _0x1a0d26.metadata.participants.map(_0x3496af => _0x3496af.id);
    let _0x6182f0 = _0x2caf89[Math.floor(Math.random() * _0x2caf89.length)];
    _0x1a0d26.bot.sendMessage(_0x1a0d26.jid, {
      'text': "The most " + _0x49b91d + " around us is *@" + _0x6182f0.split('@')[0x0] + '*',
      'mentions': [_0x6182f0]
    }, {
      'quoted': _0x1a0d26
    });
  } catch (_0x3f541f) {
    await _0x1a0d26.error(_0x3f541f + "\n\ncommand : pick", _0x3f541f);
  }
});
smd({
  'pattern': "ship",
  'category': "group",
  'filename': __filename
}, async _0x31304e => {
  if (!_0x31304e.isGroup) {
    return _0x31304e.reply(tlang().group);
  }
  let _0x33573a = _0x31304e.metadata.participants.map(_0x134a1e => _0x134a1e.id);
  var _0x33280d = _0x31304e.reply_message ? _0x31304e.reply_message.sender : _0x31304e.mentionedJid[0x0] ? _0x31304e.mentionedJid[0x0] : false;
  var _0x3cc384;
  if (_0x33280d) {
    _0x3cc384 = _0x33280d;
  } else {
    _0x3cc384 = _0x33573a[Math.floor(Math.random() * _0x33573a.length)];
  }
  if (_0x31304e.sender === _0x3cc384) {
    return _0x31304e.reply("*Wait... What!!!,You wanna do matchmaking with yourself!*");
  }
  async function _0x294e77() {
    var _0xa1af55;
    const _0x2d496e = Math.floor(Math.random() * 0x64);
    if (_0x2d496e < 0x19) {
      _0xa1af55 = "\t\t\t\t\t*RelationShip Percentage : " + _0x2d496e + "%* \n\t\tThere's still time to reconsider your choices";
    } else {
      if (_0x2d496e < 0x32) {
        _0xa1af55 = "\t\t\t\t\t*RelationShip Percentage : " + _0x2d496e + "%* \n\t\t Good enough, I guess! 💫";
      } else {
        if (_0x2d496e < 0x4b) {
          _0xa1af55 = "\t\t\t\t\t*RelationShip Percentage : " + _0x2d496e + "%* \n\t\t\tStay together and you'll find a way ⭐️";
        } else if (_0x2d496e < 0x5a) {
          _0xa1af55 = "\t\t\t\t\t*RelationShip Percentage : " + _0x2d496e + "%* \n\tAmazing! You two will be a good couple 💖 ";
        } else {
          _0xa1af55 = "\t\t\t\t\t*RelationShip Percentage : " + _0x2d496e + "%* \n\tYou both are fit to be together 💙";
        }
      }
    }
    return _0xa1af55;
  }
  var _0x550e09 = {
    ...(await _0x31304e.bot.contextInfo("Matchmaking", "   ˚ʚ♡ɞ˚"))
  };
  await _0x31304e.reply("\t❣️ *Matchmaking...* ❣️\n\t*✯────────────────────✯*\n@" + _0x31304e.sender.split('@')[0x0] + "  x  @" + _0x3cc384.split('@')[0x0] + "\n\t*✯────────────────────✯*\n\n" + (await _0x294e77()) + "\n\n" + Config.caption, {
    'contextInfo': _0x550e09,
    'mentions': [_0x3cc384]
  }, "asta");
});
smd({
  'pattern': 'mute',
  'desc': "Provides admin role to replied/quoted user",
  'category': "group",
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async _0x571a9f => {
  try {
    if (!_0x571a9f.isGroup) {
      return _0x571a9f.reply(tlang().group);
    }
    if (_0x571a9f.metadata?.["announce"]) {
      return await _0x571a9f.reply("*Uhh " + (_0x571a9f.isAstro ? "Master" : "Sir") + ", Group already muted*");
    }
    if (!_0x571a9f.isBotAdmin) {
      return _0x571a9f.reply(tlang().botAdmin);
    }
    if (!_0x571a9f.isCreator && !_0x571a9f.isAdmin) {
      return _0x571a9f.reply(tlang().admin);
    }
    await _0x571a9f.bot.groupSettingUpdate(_0x571a9f.chat, "announcement").then(_0xb9022f => _0x571a9f.reply("*_Group Chat Muted successfully!!_*"))["catch"](_0x2a06ad => _0x571a9f.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x4db49c) {
    await _0x571a9f.error(_0x4db49c + "\n\ncommand: gmute", _0x4db49c);
  }
});
smd({
  'pattern': "unmute",
  'desc': "Provides admin role to replied/quoted user",
  'category': "group",
  'filename': __filename,
  'use': '<quote|reply|number>'
}, async _0x24b94e => {
  try {
    if (!_0x24b94e.isGroup) {
      return _0x24b94e.reply(tlang().group);
    }
    if (!_0x24b94e.metadata?.['announce']) {
      return await _0x24b94e.reply("*Hey " + (_0x24b94e.isAstro ? "Master" : 'Sir') + ", Group already unmute*");
    }
    if (!_0x24b94e.isBotAdmin) {
      return _0x24b94e.reply(tlang().botAdmin);
    }
    if (!_0x24b94e.isCreator && !_0x24b94e.isAdmin) {
      return _0x24b94e.reply(tlang().admin);
    }
    await _0x24b94e.bot.groupSettingUpdate(_0x24b94e.chat, "not_announcement").then(_0x4b6e5d => _0x24b94e.reply("*_Group Chat UnMute successfully!!_*"))["catch"](_0x44f163 => _0x24b94e.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x30a66b) {
    await _0x24b94e.error(_0x30a66b + "\n\ncommand: gunmute", _0x30a66b);
  }
});
smd({
  'pattern': "lock",
  'fromMe': true,
  'desc': "only allow admins to modify the group's settings.",
  'type': "group"
}, async (_0x6fb2af, _0x32de0a) => {
  try {
    if (!_0x6fb2af.isGroup) {
      return _0x6fb2af.reply(tlang().group);
    }
    if (_0x6fb2af.metadata.restrict) {
      return await _0x6fb2af.reply("*Hey " + (_0x6fb2af.isAstro ? "Master" : "Sir") + ", Group setting already locked*");
    }
    if (!_0x6fb2af.isBotAdmin) {
      return await _0x6fb2af.reply("*_I'm not admin!_*");
    }
    ;
    if (!_0x6fb2af.isCreator && !_0x6fb2af.isAdmin) {
      return _0x6fb2af.reply(tlang().admin);
    }
    await _0x6fb2af.bot.groupSettingUpdate(_0x6fb2af.chat, "locked").then(_0x5ae9d8 => _0x6fb2af.reply("*_Group locked, Only Admin can change group settinggs!!_*"))["catch"](_0x403cf7 => _0x6fb2af.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x31b8be) {
    await _0x6fb2af.error(_0x31b8be + "\n\ncommand: lock", _0x31b8be);
  }
});
smd({
  'pattern': 'unlock',
  'fromMe': true,
  'desc': "allow everyone to modify the group's settings.",
  'type': "group"
}, async (_0x4162aa, _0x8c4937) => {
  try {
    if (!_0x4162aa.isGroup) {
      return _0x4162aa.reply(tlang().group);
    }
    if (!_0x4162aa.metadata.restrict) {
      return await _0x4162aa.reply("*Hey " + (_0x4162aa.isAstro ? "Master" : "Sir") + ", Group setting already unlocked*");
    }
    if (!_0x4162aa.isBotAdmin) {
      return await _0x4162aa.reply("*_I'm not admin!_*");
    }
    ;
    if (!_0x4162aa.isCreator && !_0x4162aa.isAdmin) {
      return _0x4162aa.reply(tlang().admin);
    }
    await _0x4162aa.bot.groupSettingUpdate(_0x4162aa.chat, "unlocked").then(_0x20efca => _0x4162aa.reply("*_Group unlocked, everyone change group settings!!_*"))["catch"](_0x2e55d4 => _0x4162aa.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x45e8e8) {
    await _0x4162aa.error(_0x45e8e8 + "\n\ncommand: unlock", _0x45e8e8);
  }
});
smd({
  'pattern': "tag",
  'alias': ["hidetag"],
  'desc': "Tags everyperson of group without mentioning their numbers",
  'category': 'group',
  'filename': __filename,
  'use': "<text>"
}, async (_0x47b256, _0x205fd5) => {
  try {
    if (!_0x47b256.isGroup) {
      return _0x47b256.reply(tlang().group);
    }
    if (!_0x205fd5 && !_0x47b256.reply_message) {
      return _0x47b256.reply("*Example : " + prefix + "tag Hi Everyone, How are you Doing*");
    }
    if (!_0x47b256.isAdmin && !_0x47b256.isCreator) {
      return _0x47b256.reply(tlang().admin);
    }
    let _0x210093 = _0x47b256.reply_message ? _0x47b256.reply_message : _0x47b256;
    let _0x221246 = _0x47b256.reply_message ? _0x47b256.reply_message.text : _0x205fd5;
    let _0x5f5bac = '';
    let _0x4371c3;
    let _0x42312f = _0x210093.mtype;
    if (_0x42312f == "imageMessage") {
      _0x5f5bac = "image";
      _0x4371c3 = await _0x210093.download();
    } else {
      if (_0x42312f == "videoMessage") {
        _0x5f5bac = "video";
        _0x4371c3 = await _0x210093.download();
      } else if (!_0x205fd5 && _0x47b256.quoted) {
        _0x4371c3 = _0x47b256.quoted.text;
      } else {
        _0x4371c3 = _0x205fd5;
      }
    }
    if (!_0x4371c3) {
      return await _0x47b256.send("*_Uhh dear, reply to message!!!_*");
    }
    return await _0x47b256.send(_0x4371c3, {
      'caption': _0x221246,
      'mentions': _0x47b256.metadata.participants.map(_0x3da6ac => _0x3da6ac.id)
    }, _0x5f5bac, _0x210093);
  } catch (_0x204b99) {
    await _0x47b256.error(_0x204b99 + "\n\ncommand: tag", _0x204b99);
  }
});
cmd({
  'pattern': 'tagadmin',
  'desc': "Tags only Admin numbers",
  'category': "group",
  'filename': __filename,
  'use': "<text>"
}, async (_0x2b94c8, _0x42ff99) => {
  try {
    if (!_0x2b94c8.isGroup) {
      return _0x2b94c8.reply(tlang().group);
    }
    if (!_0x2b94c8.isAdmin && !_0x2b94c8.isCreator) {
      return _0x2b94c8.reply(tlang().admin);
    }
    const _0x1f5645 = _0x2b94c8.admins.map((_0x184fbf, _0x31daf3) => " *|  @" + _0x184fbf.id.split('@')[0x0] + '*').join("\n");
    let _0x2dee05 = ("\n▢ Tag by : @" + _0x2b94c8.sender.split('@')[0x0] + "\n" + (_0x42ff99 ? "≡ Message :" + _0x42ff99 : '') + "\n\n*┌─⊷ GROUP ADMINS*\n" + _0x1f5645 + "\n*└───────────⊷*\n\n" + Config.caption).trim();
    return await _0x2b94c8.bot.sendMessage(_0x2b94c8.chat, {
      'text': _0x2dee05,
      'mentions': [_0x2b94c8.sender, ..._0x2b94c8.admins.map(_0x3b0031 => _0x3b0031.id)]
    });
  } catch (_0x1ab035) {
    await _0x2b94c8.error(_0x1ab035 + "\n\ncommand: tagadmin", _0x1ab035);
  }
});
cmd({
  'pattern': 'add',
  'desc': "Add that person in group",
  'category': 'group',
  'filename': __filename,
  'use': "<number|reply|mention>"
}, async (_0x154904, _0x2b8bd2) => {
  try {
    if (!_0x154904.isGroup) {
      return _0x154904.reply(tlang().group);
    }
    if (!_0x154904.isBotAdmin) {
      return await _0x154904.reply("*_I'm Not Admin In This Group, " + (_0x154904.isAstro ? "Master" : "Sir") + '_*');
    }
    if (!_0x154904.isAdmin) {
      return _0x154904.reply(tlang().admin);
    }
    let _0xe46143 = _0x154904.quoted ? _0x154904.quoted.sender : _0x154904.mentionedJid[0x0] ? _0x154904.mentionedJid[0x0] : _0x2b8bd2 ? _0x2b8bd2.replace(/[^0-9]/g, '').replace(/[\s+]/g, '') + "@s.whatsapp.net" : false;
    if (!_0xe46143) {
      return await _0x154904.reply("*_Uhh Dear, Please Provide An User._*");
    }
    try {
      await _0x154904.bot.groupParticipantsUpdate(_0x154904.chat, [_0xe46143], 'add');
      await _0x154904.reply("*_User Added in Group!!_*");
      _0x154904.react('✨');
    } catch (_0x188fcf) {
      await _0x154904.react('❌');
      await _0x154904.bot.sendMessage(_0xe46143, {
        'text': "*_Here's The Group Invite Link!!_*\n\n @" + _0x154904.sender.split('@')[0x0] + " Wants to add you in below group\n\n*_https://chat.whatsapp.com/" + (await _0x154904.bot.groupInviteCode(_0x154904.chat)) + "_*\n ---------------------------------  \n*_Join If YOu Feel Free?_*",
        'mentions': [_0x154904.sender]
      }, {
        'quoted': _0x154904
      });
      await _0x154904.reply("*_Can't add user, Invite sent in pm_*");
    }
  } catch (_0x47f9c3) {
    await _0x154904.error(_0x47f9c3 + "\n\ncommand: add", _0x47f9c3);
  }
});
cmd({
  'pattern': "getjids",
  'alias': ['gjid', "gjids", "allgc", 'gclist'],
  'desc': "Sends chat id of every groups.",
  'category': "group",
  'filename': __filename
}, async (_0x4390d6, _0x361c52, {
  cmdName: _0x5e6e64
}) => {
  try {
    if (!_0x4390d6.isCreator) {
      return _0x4390d6.reply(tlang().owner);
    }
    n = await _0x4390d6.bot.groupFetchAllParticipating();
    const _0x18571d = Object.entries(n).slice(0x0).map(_0x102283 => _0x102283[0x1]);
    let _0x991694 = '';
    let _0x478236 = false;
    let _0xbf513d = false;
    if (_0x361c52.includes("jid")) {
      _0x478236 = true;
    } else if (_0x361c52.includes("name")) {
      _0xbf513d = true;
    }
    await _0x4390d6.reply("Fetching " + (_0x478236 ? "Only jids" : _0xbf513d ? "Only Names" : "Names and Jids") + " from " + _0x18571d.length + " Groups");
    await sleep(0x7d0);
    for (var _0x97f7e7 of _0x18571d.map(_0x137cbe => _0x137cbe.id)) {
      _0x991694 += _0x478236 ? '' : "\n*Group:* " + n[_0x97f7e7].subject + " ";
      _0x991694 += _0xbf513d ? '' : "\n*JID:* " + _0x97f7e7 + "\n";
    }
    return await _0x4390d6.send(_0x991694);
  } catch (_0x26ffc5) {
    await _0x4390d6.error(_0x26ffc5 + "\n\ncommand: " + _0x5e6e64, _0x26ffc5);
  }
});
cmd({
  'pattern': "demote",
  'desc': "Demotes replied/quoted user from group",
  'category': 'group',
  'filename': __filename,
  'use': '<quote|reply|number>'
}, async _0x48abd0 => {
  try {
    if (!_0x48abd0.isGroup) {
      return _0x48abd0.reply(tlang().group);
    }
    if (!_0x48abd0.isBotAdmin) {
      return await _0x48abd0.reply("*_I'm Not Admin In This Group, Idiot_*");
    }
    if (!_0x48abd0.isAdmin) {
      return _0x48abd0.reply(tlang().admin);
    }
    let _0x3cd47d = _0x48abd0.mentionedJid[0x0] ? _0x48abd0.mentionedJid[0x0] : _0x48abd0.reply_message ? _0x48abd0.reply_message.sender : false;
    if (!_0x3cd47d) {
      return await _0x48abd0.reply("*Uhh dear, reply/mention an User*");
    }
    if (_0x48abd0.checkBot(_0x3cd47d)) {
      return await _0x48abd0.reply("*_Huh, I can't demote my creator!!_*");
    }
    try {
      await _0x48abd0.bot.groupParticipantsUpdate(_0x48abd0.chat, [_0x3cd47d], "demote");
      await _0x48abd0.reply("*_User demote sucessfully!!_*");
    } catch (_0xc21118) {
      await _0x48abd0.reply("*_Can,t demote user, try it manually, Sorry!!_*");
    }
  } catch (_0x1f664e) {
    await _0x48abd0.error(_0x1f664e + "\n\ncommand: demote", _0x1f664e);
  }
});
smd({
  'pattern': 'del',
  'alias': ['delete', "dlt"],
  'desc': "Deletes message of any user",
  'category': "group",
  'filename': __filename,
  'use': "<quote/reply message.>"
}, async _0x49a1c7 => {
  try {
    if (!_0x49a1c7.reply_message) {
      return _0x49a1c7.reply("*_Please reply to a message!!!_*");
    }
    let _0x3ca945 = _0x49a1c7.reply_message;
    if (_0x3ca945 && _0x3ca945.fromMe && _0x49a1c7.isCreator) {
      return _0x3ca945["delete"]();
    } else {
      if (_0x3ca945 && _0x49a1c7.isGroup) {
        if (!_0x49a1c7.isBotAdmin) {
          return _0x49a1c7.reply("*I can't delete messages without getting Admin Role.*");
        }
        if (!_0x49a1c7.isAdmin) {
          return _0x49a1c7.reply(tlang().admin);
        }
        await _0x3ca945["delete"]();
      } else {
        return await _0x49a1c7.reply(tlang().owner);
      }
    }
  } catch (_0x2cf742) {
    await _0x49a1c7.error(_0x2cf742 + "\n\ncommand: del", _0x2cf742);
  }
});
cmd({
  'pattern': 'broadcast',
  'desc': "Bot makes a broadcast in all groups",
  'fromMe': true,
  'category': "group",
  'filename': __filename,
  'use': "<text for broadcast.>"
}, async (_0x5565f5, _0x3920fd) => {
  try {
    if (!_0x3920fd) {
      return await _0x5565f5.reply("*_Uhh Dear, Provide text to broadcast in all groups_*");
    }
    let _0x22327c = await _0x5565f5.bot.groupFetchAllParticipating();
    let _0x1fdf42 = Object.entries(_0x22327c).slice(0x0).map(_0x39bb3a => _0x39bb3a[0x1]);
    let _0x4078d2 = _0x1fdf42.map(_0xa6f862 => _0xa6f862.id);
    await _0x5565f5.send("*_Sending Broadcast To " + _0x4078d2.length + " Group Chat, Finish Time " + _0x4078d2.length * 1.5 + " second_*");
    let _0x51b624 = "*--❗" + tlang().title + " Broadcast❗--*\n\n *🍀Message:* " + _0x3920fd;
    let _0x525239 = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'externalAdReply': {
        'title': "Suhail-Md Broadcast",
        'body': _0x5565f5.senderName,
        'renderLargerThumbnail': true,
        'thumbnail': log0,
        'mediaType': 0x1,
        'mediaUrl': '',
        'sourceUrl': gurl,
        'showAdAttribution': true
      }
    };
    for (let _0x105888 of _0x4078d2) {
      try {
        await sleep(0x5dc);
        await send(_0x5565f5, _0x51b624, {
          'contextInfo': _0x525239
        }, '', '', _0x105888);
      } catch {}
    }
    return await _0x5565f5.reply("*Successful Sending Broadcast To " + _0x4078d2.length + " Group*");
  } catch (_0x34e386) {
    await _0x5565f5.error(_0x34e386 + "\n\ncommand: broadcast", _0x34e386);
  }
});
