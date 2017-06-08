// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
'use strict';

var Tile        = require("../Types/tile.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var Utils       = require("../utils.js");
var Coord2d     = require("../Coords/coord2d.js");
var HexTile     = require("./Tiles/hexTile.js");
var SimpleBoard = require("../Types/simpleBoard.js");

var include = SimpleBoard.FromTile(Tile.FromSimple([
          /* Coord2d */[
            Coord2d.offset,
            Coord2d.compare
          ],
          HexTile.adjacents,
          HexTile.adjacent_coord,
          HexTile.direction_to_border,
          HexTile.shape
        ]));

function coordinates(shape) {
  var v = /* [] */0;
  for(var y = 0 ,y_finish = shape - 1 | 0; y <= y_finish; ++y){
    for(var x = 0 ,x_finish = (shape - y | 0) - 1 | 0; x <= x_finish; ++x){
      v = /* :: */[
        /* tuple */[
          x,
          y
        ],
        v
      ];
    }
  }
  return v;
}

function fi(prim) {
  return prim;
}

function iof(prim) {
  return prim | 0;
}

function auto_size(param, hint_num) {
  var cheight = param[1];
  var cwidth = param[0];
  if (cwidth < Curry._2(Utils.Float[/* * */3], Curry._2(Utils.Float[/* / */2], cheight, Math.sqrt(3.0)), 2.0)) {
    var size = Curry._2(Utils.Float[/* / */2], cwidth, hint_num);
    var height = Curry._2(Utils.Float[/* / */2], Curry._2(Utils.Float[/* * */3], cwidth, Math.sqrt(3.0)), 2.0);
    return /* tuple */[
            hint_num,
            size,
            /* tuple */[
              cwidth,
              height
            ]
          ];
  } else {
    var width = Curry._2(Utils.Float[/* * */3], Curry._2(Utils.Float[/* / */2], cheight, Math.sqrt(3.0)), 2.0);
    var size$1 = Curry._2(Utils.Float[/* / */2], width, hint_num);
    return /* tuple */[
            hint_num,
            size$1,
            /* tuple */[
              width,
              cheight
            ]
          ];
  }
}

function offset(shape, scale, param) {
  var match_000 = param[0];
  var match_001 = param[1];
  var fy = match_001;
  var fx = match_000;
  var vsize = Curry._2(Utils.Float[/* / */2], Curry._2(Utils.Float[/* * */3], scale, 2.0), Math.sqrt(3.0));
  var vertical = Curry._2(Utils.Float[/* * */3], vsize, 0.75);
  return /* tuple */[
          Curry._2(Utils.Float[/* + */0], Curry._2(Utils.Float[/* - */1], Curry._2(Utils.Float[/* / */2], Curry._2(Utils.Float[/* * */3], fx, scale), 2.0), Curry._2(Utils.Float[/* / */2], Curry._2(Utils.Float[/* * */3], fy, scale), 2.0)), Curry._2(Utils.Float[/* * */3], Curry._2(Utils.Float[/* / */2], shape, 2.0), scale)),
          Curry._2(Utils.Float[/* + */0], Curry._2(Utils.Float[/* + */0], Curry._2(Utils.Float[/* * */3], fx, vertical), Curry._2(Utils.Float[/* * */3], fy, vertical)), Curry._2(Utils.Float[/* / */2], vsize, 2.0))
        ];
}

function from_point(_, _$1, _$2) {
  return /* tuple */[
          0,
          0
        ];
}

var Coord = include[0];

var adjacents = include[1];

var adjacent_coord = include[2];

var direction_to_border = include[3];

var tile_at_coord = include[4];

exports.Coord               = Coord;
exports.adjacents           = adjacents;
exports.adjacent_coord      = adjacent_coord;
exports.direction_to_border = direction_to_border;
exports.tile_at_coord       = tile_at_coord;
exports.coordinates         = coordinates;
exports.fi                  = fi;
exports.iof                 = iof;
exports.auto_size           = auto_size;
exports.offset              = offset;
exports.from_point          = from_point;
/* include Not a pure module */