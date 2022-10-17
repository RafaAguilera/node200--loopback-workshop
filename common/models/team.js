'use strict';

module.exports = function(Team) {
   // inside the code block that is being exported
   Team.disableRemoteMethod("delete", true);
};
