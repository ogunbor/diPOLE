      function maxconsecutiveones(nums) {
          let count = 0;
          let result = 0;
          for (num of nums) {
              if (num == 0) {
                  count = 0
              } else {
                  count++
                  result = Math.max(result, count)
              }

          }
          return result;
      }