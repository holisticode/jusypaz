exports.creds = {
  #Your mongo auth uri goes here
  # e.g. mongodb://username:server@mongoserver:10059/somecollection
  # nationalpark is the name of my mongo database
  mongoose_auth_local: 'mongodb://siar_db:siar_pwd@localhost/jusypaz',
  #mongoose_auth_jitsu: 'copy and paste your unique connection string uri from the nodejitsu admin'
}

exports.app = {
    port: 3333,
}

exports.backup = {
  dir: "/home/siar/backup",
  source_files: "/home/siar/jusypaz/media"
}
  
