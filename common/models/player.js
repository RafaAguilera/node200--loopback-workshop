'use strict';

module.exports = function(Player) {
   // inside the code block that is being exported
   Player.disableRemoteMethod("delete", true);
};
